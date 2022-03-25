import {useSelector} from "react-redux";
import {RootState} from "../interfaces";
import React from "react";


/**
 최초만든이 : Lucas.choi
 생성일 : 2022-03-25
 */

const TestCompo = () => {

    const sample = useSelector((state) => state.count.sample)
    console.log('render TestCompo')
    return <div>
        <span>네임 : {sample.name} </span>

    </div>
}
export default React.memo(TestCompo)
