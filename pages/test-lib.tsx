import { useCallback  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {CHANGE_NAME, countMinusAction, countPlusAction} from '../reducers/count'
import {RootState} from "../interfaces";
import Layout from '../components/Layout'
import TestSamplePageCompo from '../components/TestSamplePageCompo'
/**
 * 가끔씩 리액트 기능 테스트 하는 페이지
 * @constructor
 */
const TestLibPage = () => {

  const dispatch = useDispatch() // dispatch를 사용하기 쉽게 하는 hook
  const count = useSelector((state: RootState) => state.count)


  const onClickPlus = useCallback(() => {
    dispatch(countPlusAction())
  }, [])

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction())
  }, [])

    const changeName = useCallback(()=>{
        console.log('called change name');
        dispatch({type: CHANGE_NAME})
    }, []);


    console.log('re.render test-lib')

  return (
    <Layout title="테스트 페이지">

      <span>
        카운트 :{count.count}
      </span>
      <br />
      <button onClick={onClickPlus}>테스트 버튼 플러스</button> <br />
      <button onClick={onClickMinus}>테스트 버튼 마이너스</button>
      <button onClick={changeName}>이름 변경</button>

        <TestSamplePageCompo />
    </Layout>
  )
}

export default TestLibPage
