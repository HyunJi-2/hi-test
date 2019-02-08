import React, { Component } from 'react';
import './CareerItem.css';

class CareerItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { id, onRemove } = this.props;
        console.log(id);

        return (
            <div className="career">
                <div className="subject">
                    <strong><label htmlFor="subject">제목</label></strong>
                    <input type="text" id="subject" className={`inp_comm inp_txt`} />
                </div>
                <div className="cont">
                    <strong><label htmlFor="cont">내용</label></strong>
                    <textarea id="cont" className="tf_area"/>
                </div>

                <div className={`btn_type3 btn_delete`} onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>
                    항목 삭제
                </div>
            </div>
        );
    }
}

export default CareerItem;