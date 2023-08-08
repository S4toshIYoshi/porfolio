import { useState } from 'react';

import Description from '../../UI/Description';
import { ABOUT_CARDS, ABOUT_ME } from '../../data/about';
import style from './About.module.scss';
import CardQuestion from './CardQuestion';
import { ICardsQuestion } from '../../types/about.interface';
import Heading from '../../UI/Heading';
import Button from '../../UI/Button';
import MainButton from '../mainButton/MainButton';

type Props = {};

const About = (props: Props) => {
	const [color, setColor] = useState<boolean>(false);

	return (
		<main className={style.about}>
			<Heading>О себе</Heading>
			<Description>{ABOUT_ME.section_presentation}</Description>

			<Button>
				<a href='https://21-school.ru/' style={{ color: '#fff' }}>
					Подробнее о школе 21
				</a>
			</Button>
			<div className={style.wrapper}>
				<Heading>
					Почему <span style={{ color: '#118da8' }}>именно я</span>?
				</Heading>
				<Button
					onClick={() => {
						setColor(color ? false : true);
					}}
				>
					Switch color
				</Button>
			</div>

			<div className={style.wrapperQuestion}>
				{ABOUT_CARDS.map((el: ICardsQuestion, idx: number) => {
					return (
						<CardQuestion
							key={idx}
							Icon={el.icon}
							text={el.text}
							background={color ? '#118da8' : '#000'}
						/>
					);
				})}
			</div>

			<div className={style.wrapperFeedBack}>
				<MainButton />
			</div>
		</main>
	);
};

export default About;
