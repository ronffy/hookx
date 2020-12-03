/**
 * @description 商品页面
 * @author ronffy
 * @Date 2020-11-27 15:20:09
 * @LastEditTime 2020-12-01 18:09:29
 * @LastEditors ronffy
 */
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button';
import GoodsList from './GoodsList';

const GoodsPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/total');
  }

  return (
    <div className="page-detail">
      <Button onClick={handleClick}>跳转到汇总页</Button>
      <GoodsList />
    </div>
  );
}

export default GoodsPage
