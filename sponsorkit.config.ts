import { readFileSync } from 'fs'
import path from 'path'
import { defineConfig, presets } from 'sponsorkit'

const RSS3_LOGO = (width: number, y: number) =>
  readFileSync(path.resolve(__dirname, './logo/crossbell.svg'), 'utf-8')
    .replace('${x}', String((width - 273) / 2))
    .replace('${y}', String(y))

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
            monthlyDollars: Infinity,
            composeAfter(compose, _, config) {
              if (
                config.filter?.({ monthlyDollars: Infinity } as any, []) !== false
              ) {
                compose
                  .addSpan(20)
                  .addText('Special Sponsor', 'sponsorkit-tier-title')
                  .addSpan(10)
                  .addRaw(RSS3_LOGO(config.width!, compose.height))
                  .addSpan(100)
              }
            },
          },
    ]
})