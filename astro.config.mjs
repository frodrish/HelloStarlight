import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkInjectTitle from './src/plugins/remarkInjectTitle.js'
import {astroDebug} from 'stormlit'



const sidebarTest = [{
            label: 'Title Test',
            items: [
                { label: 'Test', slug: 'test' },
                { label: 'Test: No Title And No Header', slug: 'test/notitlenoheader' },
                { label: 'Test: No Title And With Header', slug: 'test/notitlewithheader' },
                { label: 'Test: With Title', slug: 'test/withtitle' },
            ],
        }]

export default defineConfig({
    integrations: [
    starlight({
        title: 'No Fontmatter',
        sidebar: sidebarTest,
    }),
    ],

});