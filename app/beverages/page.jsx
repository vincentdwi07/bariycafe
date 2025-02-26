import Navbar from "../Component/navbar"

export default function Beverages(){
    const coldCoffeeMenu = [
        "Es Kopi Susu Citraland",
        "Ice Americano",
        "Ice Lemonade Americano",
        "Ice Macchacino",
        "Ice Hazelnut Latte",
        "Ice Caramel Latte",
        "Ice Matcha Espresso",
        "Ice Cappuccino",
        "Ice Coffee Latte",
        "Affogato",
        "Ice Coffee Avocado",
        "Ice Coconut Espresso",
        "Ice Almond Latte"
      ];
      const coldCoffeeMenuPrice = [
        "20 k",
        "18 k",
        "20 k",
        "25 k",
        "25 k",
        "23 k",
        "23 k",
        "20 k",
        "20 k",
        "20 k",
        "25 k",
        "25 k",
        "25 k"
      ];
           
    return(
        <>
            <Navbar/>
            <div className="beverages-menu px-3 px-sm-5">
                <div className="beverages-best-seller d-flex align-items-center">
                    <div className="beverages-best-seller-left">
                        <img src="/cover/coffee-cup-left.png" alt="" />
                        <img src="/cover/coffee-splash.png" alt="" />
                        <img src="/cover/cup-shadow.png" alt="" />
                        <h1 className="best-seller-full">BEST SELLER!</h1>
                        <h1 className="best-seller-hollow">BEST SELLER!</h1>
                    </div>
                    <div className="beverages-best-seller-right">
                        <h1 className="best-seller-name">Es Kopi Susu Citraland</h1>
                        <h1 className="best-seller-price">20 k</h1>
                    </div>
                </div>
                <div className="cold-coffee">
                    <h1>Cold Coffee</h1>
                    {coldCoffeeMenu.map((item, index) => (
                        <div key={index} className="cold-coffee-menu d-flex">
                            <div className="cold-coffee-menu-left">
                                <h3>{item}</h3>
                            </div>
                            <div className="cold-coffee-menu-right">
                                <h3>{coldCoffeeMenuPrice[index]}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}