let products = [
    {name: "Ноутбук Lenovo IdeaPad 3 15IGL05 (81WQ001HRK)",
    price: 30640,
    img:"https://dnr-market.ru/ssl/u/pic/ab/093eaeaac611eb818fe135c21fde40/-/Безымянный_result.webp",
    stock: 5,
    id: 1,
    description: "IdeaPad 3 стоит, как обычный ноутбук для повседневного использования, однако это устройство способно на большее. Модели, оснащенные процессорами Intel® Core™ 10-го поколения, а также увеличенными объемами оперативной памяти и эффективными накопителями, превзойдут любые ваши ожидания."
    },
    {name: "Парапетный котел Dani АОГВ 7,4 лев",
    price: 28011,
    img:"https://dnr-market.ru/ssl/u/pic/ee/5e8eb21aa211eab870d7dd2fedfd2d/-/8т%20%2811%29.webp",
    stock: 2,
    id: 2,
    description: "Парапетный котел (АОГВ) DANI 7,4 С это бытовой газовый одноконтурный котел для отопления дома, дачи, коттеджа и других помещений, оборудованных водяной системой отопления."
    },
    {name: "Смартфон Xiaomi Redmi Note 10 4 128Gb White Global Version",
    price: 18690,
    img:"https://dnr-market.ru/ssl/u/pic/0d/623b1e9d2a11eb9699c66b27589c37/-/Безымянный_result.webp",
    stock: 30,
    id: 3,
    description: "На большом безрамочном 6.43-дюймовом FHD+ AMOLED-дисплее изображение выглядит реалистичным и живым. Незаметное отверстие под фронтальную камеру и практически полное отсутствие рамок обеспечивают еще больше места для отдыха и общения."
    },
    {name: "Шлифмашина ленточная WBR ВS-910",
    price: 4099,
    img:"https://dnr-market.ru/ssl/u/pic/1f/4196b04ae111e98b10fd947b639056/-/1-min%20%286%29.jpg",
    stock: 30,
    id: 4,
    description: "Ленточная шлифмашина  BS-910 является инструментом бытового назначения и предназначена для сухой шлифовки/полировки поверхностей из дерева, древесно - стружечных плит, бетона, камня, металла и других материалов. Запрещается обрабатывать материалы, содержащие асбест."
    },
    {name: "Триммер электрический MAXCUT MCE 127",
    price: 4400,
    img:"https://dnr-market.ru/ssl/u/pic/9b/a1be26bb8b11eaa2d5b0f542048ca4/-/7т_result.webp",
    stock: 30,
    id: 5,
    description: "Используя триммер электрический Maxcut MCE 147, вы сможете быстро и качественно привести в порядок газон на большой площади."
    },
    {name: "Колонки Oklick OK-160",
    price: 1030,
    img:"https://dnr-market.ru/ssl/u/pic/68/dcd4fa324e11eb9598d877d3276290/-/Без-имени-1_result.webp",
    stock: 30,
    id: 6,
    description: "Колонки OKLICK OK-160 акустического типа 2.0 используются для оснащения ПК или ноутбука. Они обеспечивают качественное звучание и могут быть использованы как для просмотров фильмов и прослушивания музыки, так и для отдыха в видеоиграх."
    },
    {name: "Блендер погружной Centek CT-1339 Red (красный)",
    price: 1564,
    img:"https://dnr-market.ru/ssl/u/pic/10/6b11b072e511eb9ef2b57facb542c0/-/7.0_result.webp",
    stock: 30,
    id: 7,
    description: "Блендер Centek CT-1339 погружного типа выделяется среди других моделей ярко-красным дизайном. Прибор оснащен легким пластиковым корпусом и прочной погружной частью из металла. Предусматривается наличие двух рабочих скоростей."
    },
    {name: "Швейная машина Janome 419S",
    price: 15900,
    img:"https://dnr-market.ru/ssl/u/pic/fb/04697a364e11eb91d6e1fcf8804f5a/-/Безымянный.webp",
    stock: 30,
    id: 8,
    description: "Швейная машина Janome 419S станет отличным приобретением для любителей экономить свои деньги, ведь с этим устройством вы самостоятельно сможете создавать для себя необходимые вещи."
    },
]



class ComponentApp extends React.Component{
    constructor(props){
        super(props);
        this.props.products.forEach(element => {
            element.inCart = false
        });
        let cart = {display: false, total: 0, visible: false}
        this.state = {products: this.props.products, buyList:[], cart,}
        this.addToCart = this.addToCart.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.visibleCart = this.visibleCart.bind(this);
    }
    findId(list, gotId){
        let i = 0
        while(list[i].id != gotId+1){
            i++
        }
        return i
    };
    addToCart(idProd){
        let buyList = this.state.buyList
        if(this.state.products[idProd].inCart == false){
            const NewProduct ={
                name: this.state.products[idProd].name,
                price: this.state.products[idProd].price,
                img: this.state.products[idProd].img,
                stock: 1,
                id: this.state.products[idProd].id,
                description: this.state.products[idProd].description,
            };
            this.state.cart.display = true
            console.log(this.state.cart.display, this.state.cart.visible)
            this.state.products[idProd].inCart = true;
            this.setState(state => ({
                buyList: state.buyList.concat(NewProduct),
                cart: {
                        total: this.state.cart.total + this.state.products[idProd].price, visible: true, display: true},
            }));
        }
        else{
            let totalAdd = this.state.buyList[this.findId(buyList, idProd)].price*this.state.buyList[this.findId(buyList, idProd)].stock
            if(buyList[this.findId(buyList, idProd)].stock < this.state.products[idProd].stock){
                buyList[this.findId(buyList, idProd)].stock += 1
                this.state.cart.total += -totalAdd + this.state.buyList[this.findId(buyList, idProd)].price*this.state.buyList[this.findId(buyList, idProd)].stock
            this.setState({
                buyList:buyList,
            });
            }
            else{
                alert("Товара на данный момент нет на складе.")
            }
        }
    }
    deleteProduct(idBuy){
        let buyList = this.state.buyList;
        this.state.cart.total -= this.state.buyList[this.findId(buyList, idBuy)].price*(this.state.buyList[this.findId(buyList, idBuy)].stock-1)
        buyList[this.findId(buyList, idBuy)].stock = 1
        this.state.products[idBuy].inCart = false;
        this.state.cart.total -= this.state.products[idBuy].price;
        if(buyList.length == 1){
            this.state.cart.display = false
            this.state.cart.visible = false
        }
        this.setState(state =>({
            buyList:buyList.filter(buy =>(buy.id-1 != idBuy)),
        }));
    };
    addProduct(idBuy){
        let buyList = this.state.buyList;
        if(buyList[this.findId(buyList, idBuy)].stock < this.state.products[idBuy].stock){
            buyList[this.findId(buyList, idBuy)].stock += 1
            this.state.cart.total += buyList[this.findId(buyList, idBuy)].price
            this.setState(state =>({
                buyList:buyList,
            }));
        }
        else{
            alert("Товара на данный момент нет на складе.")
        }
    }
    removeProduct(idBuy){
        let buyList = this.state.buyList;
        if(buyList[this.findId(buyList, idBuy)].stock > 1){
            buyList[this.findId(buyList, idBuy)].stock -= 1
            this.state.cart.total -= buyList[this.findId(buyList, idBuy)].price
            this.setState(state =>({
                buyList:buyList,
            }));
        }
    }
    visibleCart(e){
        if (this.state.cart.visible) {
            this.state.cart.visible = false
        }
        else{
            this.state.cart.visible = true
        }
        this.setState({
            buyList:this.state.buyList,
        });
        console.log(this.state.cart.display, this.state.cart.visible)
    }
    render(){
        return(
            <div className="shop">
                <ProductList products = {products} addToCart={this.addToCart}/>
                <Cart buyList = {this.state.buyList} cart = {this.state.cart} deleteProduct={this.deleteProduct} addProduct={this.addProduct}
                removeProduct={this.removeProduct} visibleCart={this.visibleCart}/>
            </div>
        )
    }
}

class ProductList extends React.Component{
    render(){
        return(
            <div className="list">
            {this.props.products.map( (item) => (
                <ProductCard key={item.id} prod = {item} addToCart={this.props.addToCart}/>
            ))}
            </div>
        )
    }
}

class ProductCard extends React.Component{
    render(){
        return(
            <div className="card">
                <img className="card_img" src={this.props.prod.img}/>
                <h3 className="card_name">{this.props.prod.name}</h3>
                <div className="card_body">
                    <p><span className="card_price">{this.props.prod.price}</span> руб.</p>
                    <button onClick={(() => {this.props.addToCart(this.props.prod.id-1)})} className="card_btn_add">Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

class Cart extends React.Component{
    render(){
        return(
            <div className='cart_container' style={this.props.cart.visible == true ? this.props.buyList.length > 0 ? {right: 0, transition: '500ms'} : {right: -540, transition: '0s'} : {right: this.props.cart.display ? -520 : -540}}>
                <button onClick={this.props.visibleCart} className='cart_opener' style={{fontSize: 40}}>{this.props.cart.visible ? '»' : '«'}</button>
                <div className="cart">
                    <div className="buys" style={this.props.buyList.length > 3 ? {overflowY: 'scroll'} : {overflow: 'visible'}}>
                        {this.props.buyList.map( (item) => (
                        <CartBuy key={item.id} buy = {item} deleteProduct={this.props.deleteProduct} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}/>
                        ))}
                    </div>
                    <hr/>
                    <div className="total">
                            <p>В сумме: </p>
                            <span>{this.props.cart.total} руб.</span>
                        </div>
                </div>
            </div>
        )
    }
}

class CartBuy extends React.Component{
    render(){
        return(
            <div className="buy">
                <img className="buy_img" src={this.props.buy.img}/>
                <h5 className="buy_name">{this.props.buy.name}</h5>
                <div className=" buy_count">
                    <p>Кол-во: {this.props.buy.stock}</p>
                    <button onClick={(() => {this.props.addProduct(this.props.buy.id-1)})} className="btn_add_prod">+</button>
                    <button onClick={(() => {this.props.removeProduct(this.props.buy.id-1)})} className="btn_remove_prod">-</button>
                </div>
                <button onClick={(() => {this.props.deleteProduct(this.props.buy.id-1)})} className="btn_delete_prod"><img className="btn_delete_prod_img" src="./img/delete.png"/></button>
            </div>
        )
    }
}

ReactDOM.render(
    <ComponentApp products = {products}/>,
    document.querySelector('#root')
)
