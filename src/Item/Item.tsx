import Button from '@material-ui/core/Button';

//types
import {CartItemType} from '../App';
//styles
import {Wrapper} from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        {/* Inline arrow function is required as we need to send a prop to the function */}
        <Button onClick={()=>handleAddToCart(item)}>
            Add to Cart
        </Button>
    </Wrapper>
);

export default Item;