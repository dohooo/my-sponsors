import { defineConfig, fetchGitHubSponsors, presets } from 'sponsorkit'

export default defineConfig({
    includePrivate: true,
    tiers: [
        {
            title: 'Past Sponsors',
            monthlyDollars: -1,
            preset: presets.xs
        },
        {
            title: 'Backers',
            preset: presets.small,
            compose: async (composer, sponsors, config) => {
                if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
                    composer
                        .addSpan(20)
                        .addText('Backers', 'sponsorkit-tier-title')
                        .addSpan(10)
                        .addSponsorGrid(sponsors.filter(s => s.sponsor.name !== 'Reid Zhang'), presets.small)
                        .addSpan(10)
                }
            },
            composeBefore: async (composer, sponsors, config) => {
                if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
                    composer
                        .addSpan(20)
                        .addText('Special Sponsor', 'sponsorkit-tier-title')
                        .addSpan(10)
                        .addSponsorGrid(sponsors.filter(s => s.sponsor.name === 'Reid Zhang'), presets.large)
                        .addSpan(30)
                }
            }
        },
        {
            title: 'Sponsors',
            monthlyDollars: 10,
            preset: {
                avatar: {
                    size: 42,
                },
                boxWidth: 52,
                boxHeight: 52,
                container: {
                    sidePadding: 30,
                },
            }
        },
        {
            title: 'Silver Sponsors',
            monthlyDollars: 50,
            preset: presets.medium,
        },
        {
            title: 'Gold Sponsors',
            monthlyDollars: 100,
            preset: presets.large,
        },
        {
            title: 'Platinum Sponsors',
            monthlyDollars: 500,
            preset: presets.xl,
        },
        {
            title: 'Special Sponsor',
            monthlyDollars: Infinity
        },
    ]
})