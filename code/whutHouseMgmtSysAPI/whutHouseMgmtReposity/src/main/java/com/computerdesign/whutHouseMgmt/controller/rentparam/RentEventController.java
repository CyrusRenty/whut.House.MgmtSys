package com.computerdesign.whutHouseMgmt.controller.rentparam;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.computerdesign.whutHouseMgmt.bean.Msg;
import com.computerdesign.whutHouseMgmt.bean.rentparam.RentEvent;
import com.computerdesign.whutHouseMgmt.bean.rentparam.RentEventModel;
import com.computerdesign.whutHouseMgmt.bean.staffparam.StaffParameter;
import com.computerdesign.whutHouseMgmt.service.rentparam.RentEventService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@RequestMapping("/rentEvent/")
@Controller
public class RentEventController {

	@Autowired
	private RentEventService rentEventService;

	@ResponseBody
	@RequestMapping(value = "modify", method = RequestMethod.PUT)
	public Msg modifyRentEvent(@RequestBody RentEvent rentEventModel) {
		RentEvent rentEvent = rentEventService.get(rentEventModel.getRentEventId());
		if (rentEvent != null) {
			rentEventService.update(rentEventModel);
			return Msg.success().add("data", rentEventModel);
		} else {
			return Msg.error();
		}
	}

	@ResponseBody
	@RequestMapping(value = "delete/{rentEventId}", method = RequestMethod.DELETE)
	public Msg deleteRentEvent(@PathVariable Integer rentEventId) {
		RentEvent rentEvent = rentEventService.get(rentEventId);
		if (rentEvent != null) {
			rentEvent.setIsDelete(true);
			rentEventService.update(rentEvent);
			return Msg.success();
		} else {
			return Msg.error("无该数据");
		}

	}

	@ResponseBody
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public Msg addRentEvent(@RequestBody RentEvent rentEventModel) {
		rentEventService.add(rentEventModel);
		return Msg.success().add("data", rentEventModel);
	}

	@ResponseBody
	@RequestMapping("get")
	public Msg getRentEvent(@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "size", defaultValue = "10") Integer size) {
		
		PageHelper.startPage(page, size);
		
		List<RentEvent> rentEvents = rentEventService.getAll();
		//格式化日期后封装在另一个bean的list
//		List<RentEventModel> rentEventModels = dateFormat(rentEvents);
//		isBegin(rentEvents);
		List<RentEventModel> rentEventModels = isBegin(rentEvents);
		
		PageInfo pageInfo = new PageInfo(rentEvents);
		//将封装好的数据设置到pageInfo返回
		pageInfo.setList(rentEventModels);
		if (rentEventModels != null) {
			return Msg.success().add("data", pageInfo);
		} else {
			return Msg.error("无数据");
		}
	}
	
	//判断当前日期是否在开始时间和结束时间之间
	public List<RentEventModel> isBegin(List<RentEvent> rentEvents){
		List<RentEventModel> rentEventModels = new ArrayList<RentEventModel>();
		for (RentEvent rentEvent : rentEvents){
			//获取当前时间
			Date now =  new Date();
//			System.out.println(now.getTime());
			//获取开始时间
			Date rentTimeBegin = rentEvent.getRentTimeBegin();
//			System.out.println(rentTimeBegin.getTime());
			//获取结束时间
			Date rentTimeEnd = rentEvent.getRentTimeRanges();
//			System.out.println(rentTimeEnd.getTime());
//			System.out.println("--------");
			if(now.getTime() >= rentTimeBegin.getTime() && now.getTime() <= rentTimeEnd.getTime()){
				rentEvent.setRentIsOpenSel(true);
				//更新数据库数据
				rentEventService.update(rentEvent);
			}
			RentEventModel rentEventModel = new RentEventModel();
			rentEventModel.setRentSelRules(rentEvent.getRentSelRules());
			rentEventModel.setRentSelValReq(rentEvent.getRentSelValReq());
			rentEventModel.setRentTimeBegin(rentEvent.getRentTimeBegin());
			rentEventModel.setRentTimeRanges(rentEvent.getRentTimeRanges());
			rentEventModels.add(rentEventModel);
		}
		return rentEventModels;
	}
	
//	//日期格式化: 日期→字符串   并与当前时间进行比较
//	public List<RentEventModel> dateFormat(List<RentEvent> rentEvents){
//		List<RentEventModel> rentEventModels = new ArrayList<RentEventModel>();
//		for (RentEvent rentEvent : rentEvents){
//			//获取当前时间
//			Date now =  new Date();
////			System.out.println(now.getTime());
//			Date rentTimeBegin = rentEvent.getRentTimeBegin();
//			Date rentTimeEnd = rentEvent.getRentTimeRanges();
//			if(now.getTime() >= rentTimeBegin.getTime() && now.getTime() <= rentTimeEnd.getTime()){
//				rentEvent.setRentIsOpenSel(true);
//				//更新数据库数据
//				rentEventService.update(rentEvent);
//			}
//			String beginDate = null;
//			String endDate = null;
//			if(rentTimeBegin != null){				
//				beginDate = new SimpleDateFormat("yyyy-MM-dd").format(rentTimeBegin);
//			}
//			if(rentTimeEnd != null){				
//				endDate = new SimpleDateFormat("yyyy-MM-dd").format(rentTimeEnd);
//			}
////			System.out.println(date);
//			RentEventModel rentEventModel = new RentEventModel();
//			rentEventModel.setRentEventId(rentEvent.getRentEventId());
//			rentEventModel.setParamTypeId(rentEvent.getParamTypeId());
//			rentEventModel.setParamTypeName(rentEvent.getParamTypeName());
//			rentEventModel.setRentIsOpenSel(rentEvent.getRentIsOpenSel());
//			rentEventModel.setRentTimeBegin(beginDate);
//			rentEventModel.setRentTimeRanges(endDate);
//			rentEventModel.setRentSelRules(rentEvent.getRentSelRules());
//			rentEventModel.setIsDelete(rentEvent.getIsDelete());
//			rentEventModels.add(rentEventModel);
//		}
//		
//		return rentEventModels;
//	}
//	

}