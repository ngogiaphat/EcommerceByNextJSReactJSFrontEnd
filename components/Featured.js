import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {CartContext} from "@/components/CartContext";
import {useContext} from "react";
import styled from "styled-components";
const Bg = styled.div`
	background-color: #222;
	color: #fff;
	padding: 50px 0;
`;
const Title = styled.h1`
	margin: 0;
	font-size: 1.5rem;
	font-weight: normal;
	@media screen and (min-width: 768px){
		font-size: 3rem;
	};
`;
const Desc = styled.p`
	display: grid;
	grid-template-columns: 1fr;
	gap: 40px;
	img {
		max-width: 100%;
		max-height: 200px;
		display: block;
		margin: 0 auto;
	};
	div: nth-child(1){
		order: 2;
	};
	@media screen and (min-width: 768px){
		grid-template-columns: 1fr 0.9fr;
		div: nth-child(1){
			order: 0;
		};
		img {
			max-width: 100%;
		};
	};
`;
const Column = styled.div`
	display: flex;
	align-items: center;
`;
const ButtonsWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 25px;
`;
export default function Featured(){
	const {addProduct} = useContext(CartContext);
	function addFeaturedToCart(){
		addProduct(product._id);
	};
	return(
		<Bg>
			<Center>
				<ColumnsWarpper>
					<Column>
						<div>
							<Title>
								{product.title}
							</Title>
							<Desc>
								{product.description}
							</Desc>
							<ButtonsWrapper>
								<ButtonLink href = {"/product" + product._id} outline = {1} white = {1}>
									Read more
								</ButtonLink>
								<Button white onClick = {addFeaturedToCart}>
									<CartIcon/>
									Add to cart
								</Button>
							</ButtonsWrapper>
						</div>
					</Column>
					<Column>
            <img src = "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt = ""/>
          </Column>
				</ColumnsWarpper>
			</Center>
		</Bg>
	);
};