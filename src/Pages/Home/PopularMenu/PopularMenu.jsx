import SectionTitlesssss from "../../../Components/SectionTitle/SectionTitlesssss";
import useMenu from "../../../hooks/useMenu";

import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const[menu] = useMenu([]);
      const myTotalP = menu.length;
      console.log(myTotalP);
    const popular = menu.filter(item => item.category === 'popular');
   

    return (
        <section className="mb-12">
            <SectionTitlesssss
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitlesssss>
            <div className="grid md:grid-cols-2 gap-10">
         
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;