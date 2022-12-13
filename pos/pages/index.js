import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Image,
	Input,
	Spacer,
	Spinner,
	Stack,
	useBoolean,
	useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { getUser, logIn } from "../Controller/apis";
import { useRouter } from "next/router";

// components

export default function Login() {
	const router = useRouter();
	const refUsername = useRef();
	const refPassword = useRef();
	const toast = useToast();

	const [Loading, setLoading] = useBoolean(false);
	const [LoadingCheckLogin, setLoadingCheckLogin] = useBoolean(true);

	const [HidePassword, setHidePassword] = useState(true);

	const ChangeVisiblityOfPassword = () => {
		if (!HidePassword) {
			setHidePassword(true);
		} else {
			setHidePassword(false);
		}
	};

	const handleSubmit = (e) => {
		setLoading.on();
		e.preventDefault();
		logIn({ password: refPassword.current.value, identifier: refUsername.current.value })
			.then((res) => {
				getUser("/api/users/me?populate=image,role")
					.then((res) => {
						console.log(res.role);
						if (res?.role?.name == "admin") {
							router.push("/admin");
						} else if (res?.role?.name == "stock") {
							router.push("/stock");
						} else {
							router.push("/home");
						}
						toast({
							render: () => (
								<Box color='white' textAlign='center' rounded='md' p={2} bg='#2E2E2E'>
									Welcome Back {res?.first_name} 👋
								</Box>
							),
							isClosable: true,
						});
					})
					.catch((err) => {
						setLoadingCheckLogin.off()
						console.log(console.log(err));
						setLoading.off();
					});
				})
				.catch((err) => {
					setLoading.off();
					toast({
						title: err.response?.data?.error?.message || "Error to sign in!",
						status: "error",
						isClosable: true,
					});
				});
			};
			
			useEffect(() => {
				getUser("/api/users/me?populate=image,role")
				.then((res) => {
					if (res?.role?.name == "admin") {
						router.push("/admin");
					} else if (res?.role?.name == "stock") {
						router.push("/stock");
					} else
					router.push("/home");
					toast({
						render: () => (
							<Box color='white' textAlign='center' rounded='md' p={2} bg='#2E2E2E'>
							Welcome Back {res?.first_name} 👋
						</Box>
					),
					isClosable: true,
				});
			})
			.catch((err) => {
				console.log(err);
				setLoading.off();
                setLoadingCheckLogin.off()
			});
	}, []);

	return (
		<>
			<Head>
				<title>{"L'PasSage • admin"}</title>
				<meta name='description' content='description here' />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Stack px={{ base: 5, md: 10 }} justifyContent='center' h='100px'>
				<HStack bg='#F48342' h='50px' px={{ base: 4, md: 8 }} borderRadius='16px'>
					<Image borderRadius='100%' w='70px' src='/Images/Logo.png' alt='logo' />
					<Heading as='h1' color='#FAFAFA' fontSize='20px'>
						{"L'PasSage"}
					</Heading>
				</HStack>
			</Stack>
			<Stack justifyContent='center' alignItems='center' h='calc(100vh - 100px)'>
				<Stack
					spacing={10}
					px='30px'
					py='60px'
					w={{ base: "calc(100% - 50px)", md: "430px" }}
					bg='#F7FAFC'
					borderRadius='20px'
                    alignItems='center'
                    transition='ease 1.5s'
				>
					{LoadingCheckLogin ? (
						<Spinner 
                            thickness='5px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='orange.500'
                            size='xl'
                        />
					) : (
						<>
							<Heading as='h2' color='black.500' fontSize='25px'>
								Sign in
							</Heading>
							<FormControl>
								<Stack spacing={5}>
									<Stack>
										<FormLabel fontSize='13px' h={2} htmlFor='username'>
											Username
										</FormLabel>
										<Input
											focusBorderColor='orange.500'
											ref={refUsername}
											fontSize={11}
											bg='white'
											type='email'
											id='username'
										/>
									</Stack>
									<Stack>
										<Stack direction='row' alignItems='center' justifyContent='center'>
											<FormLabel m='0' fontSize='13px' htmlFor='password'>
												Password
											</FormLabel>
											<Spacer />
											<Stack w='70px'>
												<Button
													leftIcon={
														<Image
															alt='Hide/show icon'
															src={
																HidePassword
																	? "/Images/icons/Loginicons/show-icon.svg"
																	: "/Images/icons/Loginicons/hide-icon.svg"
															}
														/>
													}
													size='xs'
													fontWeight={400}
													color='gray'
													variant='ghost'
													onClick={ChangeVisiblityOfPassword}
												>
													{HidePassword ? "Show" : "Hide"}
												</Button>
											</Stack>
										</Stack>
										<Input
											ref={refPassword}
											focusBorderColor='orange.500'
											bg='white'
											fontSize={11}
											type={HidePassword ? "password" : "text"}
											id='password'
										/>
									</Stack>
									<Stack>
										<Button
											isLoading={Loading}
											onClick={handleSubmit}
											variant='solid'
											bg='orange.500'
											colorScheme='orange'
										>
											Sign in
										</Button>
									</Stack>
								</Stack>
							</FormControl>
						</>
					)}
				</Stack>
			</Stack>
		</>
	);
}
