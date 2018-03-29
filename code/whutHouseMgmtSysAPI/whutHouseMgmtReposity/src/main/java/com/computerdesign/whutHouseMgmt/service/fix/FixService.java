package com.computerdesign.whutHouseMgmt.service.fix;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.computerdesign.whutHouseMgmt.bean.fix.common.Fix;
import com.computerdesign.whutHouseMgmt.bean.fix.common.FixExample;
import com.computerdesign.whutHouseMgmt.bean.fix.common.FixExample.Criteria;
import com.computerdesign.whutHouseMgmt.bean.houseregister.Resident;
import com.computerdesign.whutHouseMgmt.bean.houseregister.ResidentExample;
import com.computerdesign.whutHouseMgmt.dao.fix.FixMapper;
import com.computerdesign.whutHouseMgmt.dao.houseregister.ResidentMapper;

@Service
public class FixService {

	@Autowired
	private FixMapper fixMapper;

	

	/**
	 * 根据id获取一个fix
	 * @param id
	 * @return
	 */
	public Fix get(Integer id) {
		return fixMapper.selectByPrimaryKey(id);
	}
	/**
	 * 增加一个fix
	 * @param fix
	 */
	public void add(Fix fix) {
		fixMapper.insertSelective(fix);
	}
	
	/**
	 * 通过PrimaryKey修改
	 * @param fix
	 */
	public void update(Fix fix){
		fixMapper.updateByPrimaryKeySelective(fix);
	}
	
	public void updateStrict(Fix fix){
		fixMapper.updateByPrimaryKey(fix);
	}
	
	public Long getCountTodayApply(Date date) {
		FixExample example = new FixExample();
		Criteria criteria = example.createCriteria();
		criteria.andApplyTimeEqualTo(date);
		return fixMapper.countByExample(example);
	}
	
	/**
	 * 通过员工id查询指定员工维修信息
	 * @param staffId
	 * @return
	 */
	public List<Fix> getByStaffId(Integer staffId){
		FixExample example = new FixExample();
		Criteria criteria = example.createCriteria();
		criteria.andStaffIdEqualTo(staffId);
		return fixMapper.selectByExample(example);
	}
	
	/**
	 * 获取全部待结算的请求
	 * @return
	 */
	public Long getCountToCheck(){
		FixExample example = new FixExample();
		Criteria criteria = example.createCriteria();
		criteria.andAgreeStateIsNotNull();
		criteria.andIsCheckEqualTo(false);
		return fixMapper.countByExample(example);
	}
	
	/**
	 * 获取全部待处理的维修请求
	 * @return
	 */
	public Long getCountToHandle() {
		FixExample example = new FixExample();
		Criteria criteria = example.createCriteria();
		criteria.andAgreeNoteIsNull();
		criteria.andIsOverEqualTo(false);
		return fixMapper.countByExample(example);
	}

	/**
	 * 根据维修类型参数获取数目
	 * @param fixParamId
	 * @return
	 */
	public Long getCountByFixParamId(Integer fixParamId) {
		FixExample example = new FixExample();
		Criteria criteria = example.createCriteria();
		criteria.andIsCheckEqualTo(false);
		criteria.andFixContentIdEqualTo(fixParamId.toString());
		return fixMapper.countByExample(example);
	}
}
