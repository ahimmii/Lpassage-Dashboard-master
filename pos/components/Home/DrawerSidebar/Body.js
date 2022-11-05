import { Show, Select, DrawerBody, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

//Components
import { LargButton } from "./Button";

const Body = ({ Links, onClose, HeaderLinks }) => {
    
    const router = useRouter();
    const refSelect = useRef(null);

    useEffect(() => {
        let checking = setInterval(()=> {
            if (refSelect.current != null) {
                
                refSelect.current.addEventListener('change', (e)=> {
                    document.getElementById(refSelect.current.value).scrollIntoView(); 
                    onClose();
                })
                clearInterval(checking);
            }
        }, 500)
        return () => {
            if (refSelect.current != undefined) {
                refSelect.current.removeEventListener('change', (e)=> {});
            }
        }
    }, []);

    return (
        <DrawerBody>
            <Stack
                overflowX='scroll'
                spacing={1}
                py='5px'
                id='links'
                h='calc(100% - 14% + 20px)'
                w='full'
				className="removeBarScroll"
            >
                <Stack px={2}>
                    <Show breakpoint="(max-width: 770px)">
                        <Select display={router.pathname == '/home' ? '' : 'none'} ref={refSelect} size='sm' rounded='lg'  focusBorderColor="orange.500" placeholder='Menu' color='black.500'>
                            {
                                HeaderLinks?.map((el, index)=> {
                                    return <option key={String(index) + el.attributes.name} value={el.attributes.name.replace(/\s+/g, '').toLowerCase()}>{el.attributes.name}</option>;
                                })

                            }
                        </Select>
                    </Show>
                </Stack>
            
                {Links?.map((link, i) => (
                    <LargButton onClose={onClose} info={link} active={router.pathname == link.href} key={i} />
                ))}
            </Stack>
        </DrawerBody>
    );
};

export default Body;
