import "@storybook/addon-docs/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import {create} from "@storybook/theming";
import {addons} from "@storybook/addons";
import logo from "./tailwind.svg";
import { tailwindColorsConfig } from '../src/utils/getTailwindconfig';

const theme = create({
    base: "light",
    brandImage: logo,
    brandUrl: "https://tailwindcss.com/",
    barSelectedColor: tailwindColorsConfig.theme.colors.blue['500'],
    brandTitle: 'UI Kit ИСП',
    background: {
        hoverable: "rgba(tailwindColorsConfig.theme.colors.blue['500'], 0.1)"
    },
    hoverable: "rgba(tailwindColorsConfig.theme.colors.blue['500'], 0.1)"
});

addons.setConfig({
    theme
});
