import React, { Component } from 'react';
import './CareerItem.css';

class DoctorCareer extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.careers !== nextProps.careers;
    }

    render() {
        const { careers, onRemove } = this.props;
        const careerList = careers.map(({id}) =>
            <div className="career"
                 id={id}
                 key={id}
            >
                <div className="subject">
                    <strong><label htmlFor="subject">제목</label></strong>
                    <input type="text" id="subject" className={`inp_comm inp_txt`} />
                </div>
                <div className="cont">
                    <strong><label htmlFor="cont">내용</label></strong>
                    <textarea id="cont" className="tf_area"/>
                </div>

                <div className={`btn_type3 btn_delete`} onClick={(e) => {
                    onRemove(id)}
                }>
                    항목 삭제
                </div>
            </div>
        );

        return (
            <div>
                {careerList}
            </div>
        );
    }
}

export default DoctorCareer;