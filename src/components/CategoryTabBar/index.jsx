import { useContext } from "react";
import styled from "styled-components";
import { ScreensContext } from "../../context/screensContex";

import { Pill } from "../uiElements";
import { pillsTypes } from "../uiElements/pills";

const removeAllActiveClasses = () => {
	const nodes = document.querySelectorAll('.pills')
		Array.from(nodes).forEach( node=> node.classList.remove('active'))
	
}



const CategoryTabBar = () => {
	const { setFilterItem } = useContext(ScreensContext);

	const onClickPill = (e) => {
		removeAllActiveClasses();
		e.target.classList.add('active');
		const filterby = e.target.name
		setFilterItem(filterby)
	};

	return (
		<CategoryTabContainer>
			<CategoryTabWrapper>
				{<>
					<Pill type={pillsTypes.category}>
						<button className='pills active' onClick={onClickPill} name=''>
							ALL
						</button>
					</Pill>
					<Pill type={pillsTypes.category}>
						<button className='pills' onClick={onClickPill} name='FINTECH'>
							FINTECH
						</button>
					</Pill>
						<Pill type={pillsTypes.category}>
						<button className='pills' onClick={onClickPill} name='EDTECH'>
							EDTECH
						</button>
					</Pill>
					</>
				}
			</CategoryTabWrapper>
		</CategoryTabContainer>
	);
};

const CategoryTabContainer = styled.section`
	margin: 1.5em 0;
	padding: 1em 0;
	border: 1px solid var(--light-grey-color);
	@media (min-width: 768px) {
		margin: 3em 0;
	}
`;

const CategoryTabWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	gap: 0.8em;

	::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 768px) {
		gap: 2.8em;
	}
`;

export default CategoryTabBar;
