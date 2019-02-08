import React, { Component } from 'react';
import CareerItemList from './components/CareerItemList';
import './App.css';

class App extends Component {
    id = 0;
    state = {
        careers: []
    }

    handleAppend = (id) => {
        const { careers } = this.state;
        this.setState({
            careers: careers.concat({
                id: this.id++
            })
        });
        console.log(this.id);
    }

    handleRemove = (id) => {
        const { careers } = this.state;
        this.setState({
            careers: careers.filter(careers => careers.id !== id)
        });
    }

    render() {
        const { careers } = this.state;
        const {
            handleAppend,
            handleRemove
        } = this;

        return (
            <section style={{ width:"1054px" }}>
                <div className="pro_doctor_info">
                    <div className={`board_write_type2 detail_info`}>
                        <table className={`tbl tbl_write`}>
                            <caption className="screen_hide">글 쓰기 입력 테이블</caption>
                            <colgroup>
                                <col className="col1" />
                                <col className="col2" />
                            </colgroup>
                            <tbody>
                            <tr>
                                <th scope="row">경력</th>
                                <td id="careerList">
                                    <button type="button" className={`btn_type4 btn_career_add`} onClick={handleAppend}>경력 추가</button>
                                    <div id="careerWrap">
                                        <CareerItemList careers={careers} onRemove={handleRemove}/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
