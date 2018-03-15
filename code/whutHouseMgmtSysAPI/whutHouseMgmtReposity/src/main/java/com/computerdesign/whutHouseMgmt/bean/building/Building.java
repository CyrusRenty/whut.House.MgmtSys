package com.computerdesign.whutHouseMgmt.bean.building;

import java.math.BigDecimal;
import java.util.Date;

import io.swagger.annotations.ApiModelProperty;

public class Building {
	@ApiModelProperty(hidden =true)
    private Integer id;

	@ApiModelProperty(example="东湖")
    private String name;

	@ApiModelProperty(example="2017-11-4")
    private Date finishTime;

	@ApiModelProperty(example="96.3")
    private Float floorArea;

	@ApiModelProperty(example="84.2")
    private Float usedArea;

	@ApiModelProperty(example="18")
    private Integer floorCount;

	@ApiModelProperty(example="1")
    private Integer regionId;

	@ApiModelProperty(example="测试楼栋")
    private String description;

	@ApiModelProperty(example="24.2")
    private BigDecimal supportFund;

	@ApiModelProperty(example="任天宇")
    private String manager;

	@ApiModelProperty(example="4")
    private Integer unitCount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Date getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Date finishTime) {
        this.finishTime = finishTime;
    }

    public Float getFloorArea() {
        return floorArea;
    }

    public void setFloorArea(Float floorArea) {
        this.floorArea = floorArea;
    }

    public Float getUsedArea() {
        return usedArea;
    }

    public void setUsedArea(Float usedArea) {
        this.usedArea = usedArea;
    }

    public Integer getFloorCount() {
        return floorCount;
    }

    public void setFloorCount(Integer floorCount) {
        this.floorCount = floorCount;
    }

    public Integer getRegionId() {
        return regionId;
    }

    public void setRegionId(Integer regionId) {
        this.regionId = regionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public BigDecimal getSupportFund() {
        return supportFund;
    }

    public void setSupportFund(BigDecimal supportFund) {
        this.supportFund = supportFund;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager == null ? null : manager.trim();
    }

    public Integer getUnitCount() {
        return unitCount;
    }

    public void setUnitCount(Integer unitCount) {
        this.unitCount = unitCount;
    }
}