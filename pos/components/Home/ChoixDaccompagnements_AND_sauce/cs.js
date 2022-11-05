import ModalMenu from "../../Modal/Modal";
import { ModalCard } from "../../Modal/ModalCard";

export default function ChoixDaccompagnements_AND_sauces({ 
	title, onClose, isOpen, next, newOrder, items, 
	action, section_CS, setSection_CS
}) {

	const getNext = () => {
		if (section_CS == 0 && items[1].length != 0)
            setSection_CS(1);
        else if (section_CS == 1 && items[2].length != 0)
            setSection_CS(2);
        else {
            onClose();
            next();
        }
    }
    
    const handleSelect = (item) => {

        let sauces = (newOrder.choix_accompagnements != undefined ? (newOrder.choix_accompagnements.find((element) => {
            return element.id == item.id;
        }) != undefined) : (null))

        let ChoixAccompagnement = (
            newOrder.sauces != undefined ? newOrder.sauces.find((element) => {
                return element.id == item.id;
            }) != undefined : (null)
        )
        
        let juses = (
            newOrder.juses != undefined ? newOrder.juses.find((element) => {
                return element.id == item.id;
            }) != undefined : (null)
        )

        return [sauces, ChoixAccompagnement, juses][section_CS];
    }

	return (
		<ModalMenu title={title[section_CS]} onClose={onClose} isOpen={isOpen} next={getNext}>
			{   
                items[section_CS]?.map((item, index) => {
                    return (
                        <ModalCard
                            key={index + item.attributes.name}
                            ifClicked={action[section_CS]}
                            item={item}
                            selected={handleSelect(item)}
                            FromBackEnd={true}
                        />
                    );
                })
            }
		</ModalMenu>
	);
}
