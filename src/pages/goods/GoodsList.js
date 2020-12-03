/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:20:09
 * @LastEditTime 2020-12-03 15:37:21
 * @LastEditors ronffy
 */
import { useRequest } from 'ahooks';
import { connect } from '../../hookx/hookx';
import { asyncList } from '../../store/effects';
import GoodContainer from './GoodContainer';
import './GoodsList.css';

const GoodsList = ({ list }) => {
  const { loading } = useRequest(asyncList);

  return (
    <div className="detail-list">
      {
        loading
          ? <span>列表加载中</span>
          : (
            list.map(({ id, name, count }) => (
              <GoodContainer
                key={id}
                id={id}
                name={name}
                count={count}
              />
            ))
          )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  // debugger
  return ({
    list: state.list,
  })

}

export default connect(mapStateToProps)(GoodsList);
