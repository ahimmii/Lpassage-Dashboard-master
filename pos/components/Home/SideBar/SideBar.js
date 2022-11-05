import { Stack, VStack, Divider, useDisclosure, Button, Image } from "@chakra-ui/react";
import { SmallButton } from "../DrawerSidebar/Button";
import DrawerSidebar from "../DrawerSidebar/Drawer";
import { useRouter } from "next/router";

const Sidebar = ({ profile, Links, isOpen, onOpen, onClose, HeaderLinks }) => {
	const router = useRouter();

	return (
		<VStack id='navbar' spacing={0} border='2px solid #eee' w={"75x"} h='100vh' rounded='2xl' className="removeBarScroll">
			<DrawerSidebar
				isOpen={isOpen}
				onClose={onClose}
				Links={Links}
				profile={profile}
				HeaderLinks={HeaderLinks}
			/>
			<Stack w='full' h='auto' direction='row' justifyContent='center' alignItems='center' py={3} px={2} className="removeBarScroll">
				<Image w='45px' alt='logo' src='/Images/Logo.png' />
			</Stack>

			<Divider w='calc(100% - 20px)' />
			<Stack w='full' h='50px' justifyContent='center' alignItems='center' p={2}>
				<Button variant='ghost' colorScheme='orange' rounded='xl' p='11px' w='40px' h='40px' onClick={onOpen}>
					<Image w='13px' alt='expand' src='/Images/icons/Expand.svg' />
				</Button>
			</Stack>

			<Stack overflowX='scroll' spacing={4} py='5px' id='links' h='full' w='full' className="removeBarScroll">
				{
					Links?.map((link) => {
						return (
							<Stack key={link.name} w='full' h='35px' justifyContent='center' alignItems='center' p={2}>
								<SmallButton active={router.pathname == link.href} info={link} />
							</Stack>
						)
					})
				}
			</Stack>

			<Divider w='calc(100% - 20px)' />
			<Stack id='profile' h='fit-content' w='full' justifyContent='center' alignItems='center' py='8px' className="removeBarScroll">
				<Image alt='avatar' src={profile.img} w='40px' h='40px' rounded='xl' cursor='pointer' onClick={onOpen} />
			</Stack>
		</VStack>
	);
};

export default Sidebar;
