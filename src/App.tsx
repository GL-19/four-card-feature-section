import "./styles/styles";
import { Card } from "./components/Card";
import { Main, Grid, TextWrapper } from "./styles/styles";
import calculator from "./images/icon-calculator.svg";
import karma from "./images/icon-karma.svg";
import supervisor from "./images/icon-supervisor.svg";
import teamBuilder from "./images/icon-team-builder.svg";

function App() {
	return (
		<Main>
			<TextWrapper>
				<h1>Reliable, efficient delivery</h1>
				<h1>
					<span>Powered by Technology</span>
				</h1>
				<p>
					Our Artificial Intelligence powered tools use millions of project data points to
					ensure that your project is successful
				</p>
			</TextWrapper>

			<Grid>
				<Card
					title="Supervisor"
					text="Monitors activity to identify project roadblocks"
					borderColor="hsl(180, 62%, 55%)"
					img={supervisor}
					gridArea="supervisor"
				/>
				<Card
					title="Team Builder"
					text="Scans our talent network to create the optimal team for your project"
					borderColor="hsl(0, 78%, 62%)"
					img={teamBuilder}
					gridArea="teamBuilder"
				/>
				<Card
					title="Karma"
					text="Regularly evaluates our talent to ensure quality"
					borderColor="hsl(34, 97%, 64%)"
					img={karma}
					gridArea="karma"
				/>
				<Card
					title="Calculator"
					text="Uses data from past projects to provide better delivery estimates"
					borderColor="hsl(212, 86%, 64%)"
					img={calculator}
					gridArea="calculator"
				/>
			</Grid>
		</Main>
	);
}

export default App;
