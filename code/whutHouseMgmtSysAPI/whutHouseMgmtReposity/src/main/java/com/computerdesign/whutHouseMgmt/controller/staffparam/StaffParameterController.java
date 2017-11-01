package com.computerdesign.whutHouseMgmt.controller.staffparam;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.computerdesign.whutHouseMgmt.bean.Msg;
import com.computerdesign.whutHouseMgmt.bean.paramclass.ParamClass;
import com.computerdesign.whutHouseMgmt.bean.staffparam.StaffParameter;
import com.computerdesign.whutHouseMgmt.service.paramclass.ParamClassService;
import com.computerdesign.whutHouseMgmt.service.staffparam.StaffParameterService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@RequestMapping("/staffParam/")
@Controller
public class StaffParameterController {

	@Autowired
	private StaffParameterService staffParameterService;

	@Autowired
	private ParamClassService paramClassService;

	// /**
	// * 在所有请求之前执行，查出paramTypeName
	// * 根据paramTypeId获取ParamClass对象，SpringMVC将其存入Map中，并可以作为目标方法的参数
	// *
	// * @param paramTypeId
	// */
	// @ModelAttribute
	// public void getParamTypeName(@PathVariable(value = "paramTypeId",
	// required = false) Integer paramTypeId,
	// Map<String, Object> map) {
	// if (paramTypeId != null) {
	// ParamClass paramClass = paramClassService.get(paramTypeId);
	// System.out.println(paramClass.getParamTypeName());
	// map.put("paramClass", paramClass);
	// }
	// }

	@ResponseBody
	@RequestMapping(value = "modify", method = RequestMethod.PUT)
	public Msg modifyStaffParameter(@RequestBody StaffParameter staffParameterModel) {
		// System.out.println(staffParameterModel);
		// 根据id获取到需要修改的职工参数
		StaffParameter staffParameter = staffParameterService.get(staffParameterModel.getStaffParamId());
		if (staffParameter == null) {
			return Msg.error("数据库中找不到该记录");
		} else {
			try {
				staffParameterService.update(staffParameterModel);
				return Msg.success().add("data", staffParameterModel);
			} catch (Exception e) {
				return Msg.error();
			}
		}
	}

	/**
	 * 添加一条职工参数记录
	 * 
	 * @param StaffParameter
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public Msg addStaffParameter(@RequestBody StaffParameter staffParameterModel) {
		// System.out.println(StaffParameter);
		// System.out.println(paramClass.getParamTypeName());
		// 将参数封装成StaffParameter对象
		if (staffParameterModel.getStaffParamName() != null && staffParameterModel.getParamTypeId() != null) {
			staffParameterService.add(staffParameterModel);
			return Msg.success().add("data", staffParameterModel);
		} else {
			return Msg.error("必要信息不完整，添加失败");
		}

	}

	/**
	 * 根据StaffParamId删除对应记录
	 * 
	 * @param StaffParamId
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "delete/{staffParamId}", method = RequestMethod.DELETE)
	public Msg deleteStaffParameter(@PathVariable("staffParamId") Integer staffParamId) {
		StaffParameter staffParameter = staffParameterService.get(staffParamId);
		if (staffParameter == null) {
			return Msg.error("数据库中无该记录");
		} else {
			try {
				staffParameterService.delete(staffParamId);
				return Msg.success().add("data", staffParameter);
			} catch (Exception e) {
				return Msg.error();
			}
		}

	}

	/**
	 * 根据paramTypeId获取对应类型职工参数
	 * 
	 * @param paramTypeId
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "get/{paramTypeId}",method=RequestMethod.GET)
	public Msg getStaffParameter(@PathVariable("paramTypeId") Integer paramTypeId,
			@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "size", defaultValue = "10") Integer size) {
		// // 获取所有参数
		// List<StaffParameter> staffParams = staffParameterService.getAll();
		//
		// // 用于封装结果数据
		// List<StaffParameter> staffParamsResult = new
		// ArrayList<StaffParameter>();
		// for (StaffParameter staffParam : staffParams) {
		// if (staffParam.getParamTypeId() == paramTypeId) {
		// staffParamsResult.add(staffParam);
		// }
		// }

		PageHelper.startPage(page, size);

		// 获取对应paramTypeId的参数
		List<StaffParameter> staffParams = staffParameterService.getAllByParamTypeId(paramTypeId);

		PageInfo pageInfo = new PageInfo(staffParams);

		if (staffParams != null) {
			return Msg.success().add("data", pageInfo);
		} else {
			return Msg.error("无数据");
		}
	}

}
