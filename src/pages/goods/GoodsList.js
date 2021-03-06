/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:20:09
 * @LastEditTime 2020-12-03 17:46:12
 * @LastEditors ronffy
 */
import { useRequest } from 'ahooks';
import { connect } from 'react-redux';
import { asyncList } from '../../store/effects';
import GoodContainer from './GoodContainer';
import './GoodsList.css';

const GoodsList = ({ list, onAsyncList }) => {
  const { loading } = useRequest(onAsyncList);

  return (
    <div className="detail-list">
      {
        loading
          ? <div>loading</div>
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

const mapStateToProps = ({ listApp }) => ({
  list: listApp.list,
})

const mapDispathToProps = (dispatch) => ({
  async onAsyncList() {
    return dispatch(asyncList());
  }
})

export default connect(mapStateToProps, mapDispathToProps)(GoodsList);
