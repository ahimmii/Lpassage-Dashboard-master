import ModalMenu from "../../Modal/Modal";
import {ModalCardForPlaceDeConsomation} from "../../Modal/ModalCard";

export default function PlaceDeConsomation({ onClose, isOpen, next, choisePlaceDeConsomation, newOrder, placesDeConsomation, title }) {
	return (
		<ModalMenu
			title={title}
			toCenter={true}
			onClose={onClose}
			isOpen={isOpen}
			next={next}
			disablebtn={newOrder != undefined && newOrder.placeDeConsomation != undefined && newOrder.placeDeConsomation.length < 1}
		>
			{placesDeConsomation?.map((item, index) => {
				return (
					<ModalCardForPlaceDeConsomation
						ifClicked={choisePlaceDeConsomation}
						item={item}
						key={index + item.name}
						selected={
							newOrder != undefined ?
                                newOrder.placeDeConsomation != undefined ?
                                    newOrder.placeDeConsomation.find((element) => {
										return element.id == item.id;
									}) != undefined
							    : null
							: null
						}
                        FromBackEnd={false}
					/>
				);
			})}
		</ModalMenu>
	);
}
