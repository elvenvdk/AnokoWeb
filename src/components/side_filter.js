import React from 'react';



export const SideFilter = props => {
    const { 
        label1, label2,
        label3, label4,
        label5, label6,
        label7, label8,
        label9, label10,
        label11
    } = props;
    return(
        <div>
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input side-filter-check-input" type="checkbox" value="" />
                    {label1}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">
                    <input className="form-check-input side-filter-check-input" type="checkbox" value="" />
                    {label2}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">
                    <input className="form-check-input side-filter-check-input" type="checkbox" value="" />
                    {label3}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label4}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label5}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label6}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label7}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label8}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label9}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label10}
                </label>
            </div>
            <br />
            <div className="form-check side-filter-form-check">
                <label className="form-check-label">                    
                    <input className="form-check-input" type="checkbox" value="" />                    
                    {label11}
                </label>
            </div>
        </div>
    )
}