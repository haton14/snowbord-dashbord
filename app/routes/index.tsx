import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
	const name = c.req.query("name") ?? "Hono";
	return c.render(
		<div class={className}>
			<ul class="price-flex">
				<li class="kind">
					<ul class="ul01">
						<li class="li01">マッサージ</li>
						<li class="li02">Aコース</li>
						<li class="li03">Bコース</li>
						<li class="li04">Cコース</li>
					</ul>
				</li>
				<li class="price">
					<ul>
						<li class="li01">45分</li>
						<li class="li02">1,000円</li>
						<li class="li03">2,000円</li>
						<li class="li04">3,000円</li>
					</ul>
					<ul>
						<li class="li01">90分</li>
						<li class="li02">4,000円</li>
						<li class="li03">5,000円</li>
						<li class="li04">6,000円</li>
					</ul>
				</li>
			</ul>
		</div>,
		{ title: name },
	);
});
