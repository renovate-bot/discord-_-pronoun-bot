import {InteractionResponseType} from 'discord-interactions';
import {type Component} from '../discord/discord-types.js';
import {type Interaction} from '../discord/interaction.js';
import {getMessageData} from '../component-builders.js';

const component: Component = {
	key: 'multi-prompt',
	async onInteraction(interaction: Interaction) {
		return {
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: await getMessageData(interaction),
		};
	},
};

export default component;
