import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{p as t,u as n}from"./react-C-DVLZQH.js";import{$ as r,$n as i,$t as a,A as o,An as s,At as c,B as l,Bn as ee,Bt as te,C as ne,Cn as u,Ct as re,D as d,Dn as ie,Dt as ae,E as oe,En as se,Et as f,F as ce,Fn as le,Ft as ue,G as p,Gn as de,Gt as fe,H as m,Hn as pe,Ht as me,I as he,In as ge,It as h,J as g,Jn as _e,Jt as _,K as ve,Kn as v,Kt as ye,L as be,Ln as xe,Lt as Se,M as y,Mn as Ce,Mt as we,N as Te,Nn as Ee,Nt as De,O as b,On as Oe,Ot as ke,P as x,Pn as Ae,Pt as je,Q as Me,Qn as S,Qt as C,R as Ne,Rn as w,Rt as Pe,S as Fe,Sn as Ie,St as Le,T as Re,Tn as ze,Tt as Be,U as Ve,Un as He,Ut as T,V as Ue,Vn as We,Vt as Ge,W as Ke,Wn as qe,Wt as Je,X as Ye,Xn as E,Xt as Xe,Y as Ze,Yn as D,Yt as Qe,Z as O,Zn as $e,Zt as et,_ as tt,_n as nt,_t as rt,a as it,an as at,ar as ot,at as st,b as ct,bn as lt,bt as ut,c as dt,cn as ft,ct as k,d as pt,dn as mt,dt as ht,en as gt,er as _t,et as A,f as vt,fn as yt,ft as bt,g as xt,gn as St,gt as Ct,h as wt,hn as Tt,ht as j,i as Et,in as Dt,ir as Ot,it as kt,j as M,jn as At,jt as N,k as jt,kn as Mt,kt as P,ln as Nt,lt as Pt,m as Ft,mn as It,mt as Lt,n as Rt,nn as zt,nr as F,nt as Bt,o as I,on as Vt,or as L,ot as R,p as Ht,pn as Ut,pt as z,q as Wt,qn as B,qt as V,r as Gt,rn as H,rr as Kt,rt as qt,s as Jt,sn as Yt,st as Xt,t as Zt,tn as Qt,tr as $t,tt as en,u as tn,un as nn,ut as rn,v as an,vn as on,vt as sn,w as cn,wn as U,wt as ln,x as un,xn as dn,xt as W,y as fn,yn as pn,yt as mn,z as G,zn as K,zt as hn}from"./index-Bl-VsMIJ.js";var q=e(t(),1),J=n();function gn({children:e,className:t=``}){return(0,J.jsx)(`main`,{className:`screen-shell ${t}`,children:e})}var _n={buttons:`import { GameButton, GameIconButton, GameSticker } from '@nirvana/game-ui';

<GameButton onClick={save}>Save garden</GameButton>
<GameButton variant="secondary" gameSize="sm">Later</GameButton>
<GameButton variant="ghost" sound="back">Cancel</GameButton>
<GameButton loading>Planting</GameButton>

<GameIconButton
  icon={<GameSticker name="bag" />}
  label="Bag"
  notification="!"
  notificationLabel="Backpack needs attention"
  onClick={openBag}
/>`,play:`import { PlayButton } from '@nirvana/game-ui';

<PlayButton label="Play level 1" value={1} onClick={startLevel} />
<PlayButton label="Retry level 9" value={9} tone="danger" onClick={retry} />
<PlayButton label="Play, locked" value={4} disabled />`,forms:`import { useState } from 'react';
import { GameButton, GameField, GameInput, GameSelect } from '@nirvana/game-ui';

function GardenForm() {
  const [name, setName] = useState('');
  const [season, setSeason] = useState('spring');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <GameField label="Garden name" description="Shown in the journal." required>
        <GameInput value={name} onChange={(event) => setName(event.target.value)} required />
      </GameField>
      <GameField label="Starting season">
        <GameSelect
          value={season}
          onValueChange={setSeason}
          options={[
            { value: 'spring', label: 'Spring' },
            { value: 'autumn', label: 'Autumn' },
          ]}
        />
      </GameField>
      <GameButton type="submit">Save garden</GameButton>
    </form>
  );
}`,tabs:`import { GameSticker, GameTabs } from '@nirvana/game-ui';

<GameTabs
  label="Garden journal sections"
  defaultValue="tasks"
  items={[
    {
      value: 'tasks',
      label: 'Tasks',
      icon: <GameSticker name="letter" size={18} />,
      content: <p>Water two beds today.</p>,
    },
    {
      value: 'badges',
      label: 'Badges',
      icon: <GameSticker name="trophy" size={18} />,
      content: <p>Morning Gardener</p>,
      notification: 'dot',
    },
  ]}
/>`,settings:`import { useState } from 'react';
import { GameSlider, GameSticker, GameSwitch, GameTimerChip } from '@nirvana/game-ui';

function SoundSettings() {
  const [soundOn, setSoundOn] = useState(true);
  const [volume, setVolume] = useState(60);

  return (
    <>
      <GameSwitch
        label="Garden sounds"
        icon={<GameSticker name="bell" size={22} />}
        checked={soundOn}
        onCheckedChange={setSoundOn}
      />
      <GameSlider
        label="Music volume"
        value={volume}
        onValueChange={setVolume}
        formatValue={(current) => \`\${current}%\`}
      />
      <GameTimerChip label="Harvest" remainingSeconds={154} />
    </>
  );
}`,choices:`import { useState } from 'react';
import { GameCheckbox, GameRadioGroup } from '@nirvana/game-ui';

function Preferences() {
  const [daily, setDaily] = useState(true);
  const [difficulty, setDifficulty] = useState('gentle');

  return (
    <>
      <GameCheckbox
        label="Daily garden note"
        checked={daily}
        onCheckedChange={(next) => setDaily(next === true)}
      />
      <GameRadioGroup
        label="Difficulty"
        value={difficulty}
        onValueChange={setDifficulty}
        options={[
          { value: 'gentle', label: 'Gentle', description: 'No timers.' },
          { value: 'tending', label: 'Tending' },
        ]}
      />
    </>
  );
}`,stepper:`import { useState } from 'react';
import { NumberStepper, PriceTag } from '@nirvana/game-ui';

function SeedOrder() {
  const [count, setCount] = useState(1);

  return (
    <>
      <NumberStepper
        label="seed packets"
        value={count}
        onValueChange={setCount}
        min={1}
        max={12}
      />
      <PriceTag price={count * 40} />
    </>
  );
}`,steppers:`import { useState } from 'react';
import { NumberStepper, StepperChip } from '@nirvana/game-ui';

function Recipe() {
  const [noodle, setNoodle] = useState(2);
  const [seeds, setSeeds] = useState(0);

  return (
    <>
      <StepperChip label="Noodle" badge="$1" value={noodle} onValueChange={setNoodle} max={9} />
      <NumberStepper polarity size="sm" label="Seeds" value={seeds} onValueChange={setSeeds} />
    </>
  );
}`,selection:`import { useState } from 'react';
import { SelectionChip, SelectionChipGrid } from '@nirvana/game-ui';

const MENU = ['Boba', 'Ramen', 'Dango'];

function MenuPicker() {
  const [picked, setPicked] = useState<string[]>([]);
  const full = picked.length >= 2;

  return (
    <SelectionChipGrid instruction="Select 2 items to sell">
      {MENU.map((item) => (
        <SelectionChip
          key={item}
          label={item}
          selected={picked.includes(item)}
          atCapacity={full}
          onSelectedChange={(next) =>
            setPicked((current) =>
              next ? [...current, item] : current.filter((entry) => entry !== item),
            )
          }
        />
      ))}
    </SelectionChipGrid>
  );
}`,segmented:`import { useState } from 'react';
import { SegmentedControl } from '@nirvana/game-ui';

function CollectionFilter() {
  const [filter, setFilter] = useState('all');

  return (
    <SegmentedControl
      label="Collection filter"
      stretch
      value={filter}
      onValueChange={setFilter}
      options={[
        { value: 'all', label: 'All' },
        { value: 'owned', label: 'Owned' },
        { value: 'new', label: 'New' },
      ]}
    />
  );
}`,"settings-rows":`import { useState } from 'react';
import { GameSticker, GameSwitch, SettingsList, SettingsRow } from '@nirvana/game-ui';

function SettingsScreen() {
  const [soundOn, setSoundOn] = useState(true);

  return (
    <SettingsList>
      <SettingsRow
        label="Garden sounds"
        icon={<GameSticker name="speaker" />}
        control={
          <GameSwitch label="Garden sounds" hideLabel checked={soundOn} onCheckedChange={setSoundOn} />
        }
      />
      <SettingsRow
        label="Journal"
        description="Read every note you have kept."
        icon={<GameSticker name="letter" />}
        onClick={openJournal}
      />
    </SettingsList>
  );
}`,search:`import { useState } from 'react';
import { FilterChips, GameSearchField, ViewToggle, type CollectionView } from '@nirvana/game-ui';

function CollectionToolbar() {
  const [query, setQuery] = useState('');
  const [kinds, setKinds] = useState<string[]>([]);
  const [view, setView] = useState<CollectionView>('grid');

  return (
    <>
      <GameSearchField value={query} onValueChange={setQuery} label="Search the garden" resultCount={23} />
      <FilterChips
        label="Filter by kind"
        options={[
          { value: 'plants', label: 'Plants' },
          { value: 'critters', label: 'Critters' },
        ]}
        value={kinds}
        onValueChange={setKinds}
      />
      <ViewToggle value={view} onValueChange={setView} />
    </>
  );
}`,cost:`import { CostButton, GameSticker } from '@nirvana/game-ui';

<CostButton
  label="Plant"
  price={40}
  balance={coins}
  currencyIcon={<GameSticker name="coin" />}
  onClick={plant}
/>`,longpress:`import { GameButton, GameSticker, GameTooltip, useLongPress } from '@nirvana/game-ui';

function ItemTile() {
  const { handlers, didLongPress } = useLongPress(() => showDetail());

  return (
    <>
      <button type="button" {...handlers} onClick={() => !didLongPress() && select()}>
        Hold for detail
      </button>
      <GameTooltip content="Opens on tap, so it works on a phone.">
        <GameButton variant="neutral" gameSize="sm">
          <GameSticker name="caution" />
          What is this?
        </GameButton>
      </GameTooltip>
    </>
  );
}`},vn={themes:`import { GameButton } from '@nirvana/game-ui';
import { useActiveTheme } from '@nirvana/theme/activeTheme';
import { GAME_THEME_IDS, themeById } from '@nirvana/theme/themes';
import { useAppStore } from '@nirvana/shell/appStore';

function ThemePicker() {
  const theme = useActiveTheme();
  const themeId = useAppStore((state) => state.settings.theme);
  const setSettings = useAppStore((state) => state.setSettings);

  return (
    <div className="flex flex-wrap gap-2" aria-label={theme.name}>
      {GAME_THEME_IDS.map((id) => (
        <GameButton
          key={id}
          variant={id === themeId ? 'primary' : 'neutral'}
          onClick={() => setSettings({ theme: id })}
        >
          {themeById(id).name}
        </GameButton>
      ))}
    </div>
  );
}`,palette:`import { useActiveTheme } from '@nirvana/theme/activeTheme';
import { gameColorVar } from '@nirvana/theme/gameTheme';

// In CSS: every colour is a custom property.
// .my-card { background: var(--game-color-surface); color: var(--game-color-text); }

function ScoreCard({ score }: { score: number }) {
  const theme = useActiveTheme();
  return (
    // Tailwind classes map to the same tokens.
    <div className="rounded-card bg-primary p-3 text-primary-foreground">
      <span style={{ color: gameColorVar('primaryForeground') }}>{score}</span>
      <small aria-hidden="true">{theme.colors.primary}</small>
    </div>
  );
}`,derived:`import { useActiveTheme } from '@nirvana/theme/activeTheme';
import { derivePalette } from '@nirvana/theme/palette';
import { themeById } from '@nirvana/theme/themes';

// CSS: each tone has a face, Hl, Shade, On and Text step.
// .my-chip {
//   background: var(--color-primary);
//   box-shadow: inset 0 -3px 0 var(--color-primary-shade);
//   color: var(--color-primary-on);
// }

function ToneChip() {
  const { ui } = useActiveTheme();
  return <span style={{ background: ui.positive, color: ui.positiveOn }}>Ready</span>;
}

// A new theme authors 14 base colours and derives the rest.
const { colors, ui } = derivePalette(themeById('nirvana').palette);`,glyphs:`import { GameGlyph, GameIconButton } from '@nirvana/game-ui';

function Glyphs() {
  return (
    <>
      <GameGlyph name="search" tone="secondary" size={24} label="Search" />
      <GameIconButton
        icon={<GameGlyph name="settings" tone="orb" />}
        aria-label="Open settings"
      />
    </>
  );
}`,uiart:`import { GameSprite } from '@nirvana/game-ui';

function UiArt() {
  return (
    <>
      {/* Painted art keeps its own colours. */}
      <GameSprite name="mt-currency/can" size={48} label="Cans" />
      <GameSprite name="mt-mascots/cat-cheer" size={96} />
      {/* Caps and ribbons are grey art, tinted with a theme token. */}
      <span className="mt-cap-rim">
        <GameSprite name="mt-caps/starburst" size={64} tint="var(--color-primary)" />
      </span>
    </>
  );
}`,typography:`import { useActiveTheme } from '@nirvana/theme/activeTheme';

// CSS: .title { font-family: var(--font-display); }

function TypeSamples() {
  const { typography } = useActiveTheme();
  return (
    <>
      {/* Tailwind classes: font-display, font-body, font-numeric, font-hand. */}
      <h2 className="font-display text-2xl font-bold">A warm little corner</h2>
      <p className="font-body">Rounded body text for labels and dialog.</p>
      <span className="font-numeric tabular-nums">12,480</span>
      <code>{typography.numeric}</code>
    </>
  );
}`,stickers:`import { GameSticker, gameStickerNames } from '@nirvana/game-ui';

function Stickers() {
  return (
    <>
      <GameSticker name="coin" size={26} />
      <GameSticker name="heart" label="Hearts" />
      {/* Every name, for a picker or a debug view. */}
      <div className="flex flex-wrap gap-2">
        {gameStickerNames.map((name) => (
          <GameSticker key={name} name={name} size={24} />
        ))}
      </div>
    </>
  );
}`,sprites:`import { GameSprite } from '@nirvana/game-ui';

function Sprites() {
  return (
    <>
      <GameSprite name="sunflower" size={32} />
      {/* A white sticker rim, for art on a coloured ground. */}
      <GameSprite name="chicken" size={32} sticker />
      {/* The size the art has in the world (one board unit is 64px). */}
      <GameSprite name="critter-tabi" size="natural" label="Tabi" />
    </>
  );
}`,layers:`import { useActiveTheme } from '@nirvana/theme/activeTheme';

// Tailwind: name a step, never a number.
<div className="fixed inset-x-0 bottom-0 z-[var(--layer-nav)]">...</div>

// CSS: .my-popover { z-index: var(--layer-overlay); }
// Steps, bottom-up: stage, raised, nav, overlay, toast, flight, coach.

function CoachLayer() {
  const { layer } = useActiveTheme();
  return <div style={{ zIndex: layer.coach }}>...</div>;
}`,rarity:`import {
  GameBadge,
  GameSprite,
  rarityBadgeClasses,
  rarityFrameClasses,
  rarityLabel,
  type RarityTier,
} from '@nirvana/game-ui';

function RarityItem({ tier }: { tier: RarityTier }) {
  return (
    <div className="grid justify-items-center gap-2">
      <span className={\`grid size-14 place-items-center rounded-card \${rarityFrameClasses[tier]}\`}>
        <GameSprite name="sunflower" size={30} />
      </span>
      <GameBadge className={rarityBadgeClasses[tier]}>{rarityLabel[tier]}</GameBadge>
    </div>
  );
}`,atoms:`import {
  ClaimedTick,
  CornerSlot,
  GameDivider,
  GameIconFrame,
  GameSticker,
  NotificationBubble,
} from '@nirvana/game-ui';

function Atoms() {
  return (
    <>
      <span className="relative inline-block">
        <GameIconFrame size="lg" tone="yellow" icon={<GameSticker name="gift" />} />
        <CornerSlot corner="top-right">
          <NotificationBubble value={3} label="3 new" />
        </CornerSlot>
      </span>
      <GameDivider spacing="sm" />
      <ClaimedTick />
    </>
  );
}`,frames:`import { GameIconFrame, GameSprite, GameSticker } from '@nirvana/game-ui';

function Frames() {
  return (
    <>
      <GameIconFrame size="lg" label="Kale" icon={<GameSprite name="kale" />} />
      <GameIconFrame
        shape="button"
        tone="sage"
        notification={2}
        notificationLabel="2 new"
        icon={<GameSticker name="coin" />}
      />
    </>
  );
}`,badges:`import { GameBadge, GameSticker } from '@nirvana/game-ui';

function Badges() {
  return (
    <>
      <GameBadge variant="sage">
        <GameSticker name="tick" />
        Claimed
      </GameBadge>
      <GameBadge gameSize="sm" variant="yellow">New</GameBadge>
      {/* A counted badge: the amount uses tabular figures. */}
      <GameBadge
        variant="yellow"
        icon={<GameSticker name="coin" />}
        amount={240}
        label="240 coins"
      />
    </>
  );
}`,hud:`import {
  GameIconButton,
  GameProgress,
  GameSticker,
  ResourceCounter,
  TopHud,
} from '@nirvana/game-ui';

function Hud() {
  return (
    <>
      <TopHud
        layout="inline"
        resources={[
          { value: 1240, icon: <GameSticker name="coin" />, label: 'coins', variant: 'coins' },
          { value: 8, icon: <GameSticker name="energy" />, label: 'energy', variant: 'energy' },
        ]}
        actions={<GameIconButton icon={<GameSticker name="settings" />} aria-label="Open settings" />}
      />
      <ResourceCounter surface="glass" value={128} icon={<GameSticker name="coin" />} label="coins" />
      <GameProgress value={68} variant="experience" label="Experience" icon={<GameSticker name="star" />} showValue />
    </>
  );
}`,world:`import { useState } from 'react';
import {
  ClaimCard,
  GameSprite,
  GameSticker,
  HostHint,
  HudCurrencyPill,
  HudMeter,
  WorldOrbButton,
} from '@nirvana/game-ui';

function WorldChrome() {
  const [coins, setCoins] = useState(940);
  return (
    <>
      <HudCurrencyPill value={coins} icon={<GameSticker name="coin" />} label="Coins" onAdd={() => setCoins(coins + 100)} />
      <HudMeter value={6} max={10} level={2} icon={<GameSticker name="heart" />} label="Friendship" />
      <WorldOrbButton icon={<GameSticker name="plus" />} label="Zoom in" />
      <ClaimCard title="Plant three" value={2} target={3} art={<GameSprite name="sunflower" size={36} />} />
      <HostHint speaker="The keeper" avatar={<GameSprite name="critter-tabi" size={40} />}>
        Tap the glowing spot to plant your first seed.
      </HostHint>
    </>
  );
}`,nav:`import { useState } from 'react';
import { BottomGameNav, GameSticker } from '@nirvana/game-ui';

function GameTabs() {
  const [tab, setTab] = useState('home');
  return (
    <BottomGameNav
      value={tab}
      onValueChange={setTab}
      items={[
        { value: 'home', label: 'Home', icon: <GameSticker name="home" /> },
        { value: 'shop', label: 'Shop', icon: <GameSticker name="basket" />, notification: 2 },
        { value: 'bag', label: 'Bag', icon: <GameSticker name="bag" /> },
      ]}
    />
  );
}`,lives:`import { GameGlyph, GameTimerChip, LivesMeter, ResourceCounter } from '@nirvana/game-ui';

function LivesRow() {
  return (
    <>
      {/* Refill countdown shows while the lives are below max. */}
      <LivesMeter current={3} max={5} refillSeconds={754} />
      <GameTimerChip remainingSeconds={90} warning={false} />
      <GameTimerChip elapsedSeconds={221} />
      <ResourceCounter
        surface="chip"
        value={3}
        total={8}
        icon={<GameGlyph name="paw" />}
        label="cats placed"
      />
    </>
  );
}`,minigame:`import { GameGlyph, MinigameHud } from '@nirvana/game-ui';

function RoundBar({ score, secondsLeft, onStop }: { score: number; secondsLeft: number; onStop: () => void }) {
  return (
    <div className="relative h-20">
      <MinigameHud
        score={score}
        scoreLabel="Score"
        scoreIcon={<GameGlyph name="paw" size={30} />}
        remainingSeconds={secondsLeft}
        timerLabel="Time left"
        timerWarning={secondsLeft <= 5}
        meter={{ value: 0.35, label: 'Paper' }}
        onStop={onStop}
        stopLabel="Stop the game"
      />
    </div>
  );
}`,toasts:`import { GameButton, GameCallout, useGameCallout, useGameToast } from '@nirvana/game-ui';

// The app shell mounts GameToastProvider, so any screen can call notify.
function HarvestButton() {
  const { notify } = useGameToast();
  const { callout, show } = useGameCallout();
  return (
    <>
      <GameCallout callout={callout} />
      <GameButton
        onClick={() => {
          notify({ title: 'Seeds planted', description: 'Come back soon.', tone: 'success' });
          show({ title: '3 in a row!', tone: 'reward' });
        }}
      >
        Plant
      </GameButton>
    </>
  );
}`,speech:`import { GameButton, GameSprite, SpeechBubble, SpeechHighlight } from '@nirvana/game-ui';

<SpeechBubble
  tone="yellow"
  speaker="Hazel"
  avatar={<GameSprite name="critter-tabi" size={44} />}
  action={<GameButton gameSize="sm" variant="neutral">Reply</GameButton>}
>
  I found <SpeechHighlight>three acorns</SpeechHighlight> and I am keeping them!
</SpeechBubble>`,mail:`import { GameSprite, LetterCard } from '@nirvana/game-ui';

function Letter({ onClaim }: { onClaim: () => void }) {
  return (
    <LetterCard
      from="Auntie Mole"
      avatar={<GameSprite name="critter-tabi" size={40} />}
      date="This morning"
      unread
      attachment={{ label: '3 acorns', icon: <GameSprite name="mushroom" /> }}
      onClaim={onClaim}
    >
      I saved you a few seeds. Plant them somewhere sunny, dear.
    </LetterCard>
  );
}`,dialogue:`import { DialogueBox, GameSprite } from '@nirvana/game-ui';

function SeedTalk({ onAnswer }: { onAnswer: (id: string) => void }) {
  return (
    <DialogueBox
      speaker="Auntie Mole"
      portrait={<GameSprite name="critter-tabi" />}
      text="Will you help me plant the new seeds?"
      choices={[
        { id: 'yes', label: 'Of course' },
        { id: 'later', label: 'Maybe later' },
      ]}
      onChoose={onAnswer}
    />
  );
}`,coaching:`import { useRef, useState } from 'react';
import { CoachMark, GameButton, HintPill } from '@nirvana/game-ui';

function WaterTutorial() {
  const [open, setOpen] = useState(true);
  const target = useRef<HTMLButtonElement>(null);
  return (
    <>
      <GameButton ref={target} variant="sage">Water the beds</GameButton>
      <HintPill pulse>Try matching the two berries first.</HintPill>
      <CoachMark
        open={open}
        target={target.current}
        stepLabel="Step 1 of 3"
        title="Water the beds"
        description="Tap here each morning to keep the garden growing."
        onDismiss={() => setOpen(false)}
      />
    </>
  );
}`},yn={collectibles:`import { useState } from 'react';
import { CollectibleCard, CollectibleGrid, GameSprite } from '@nirvana/game-ui';

const [selected, setSelected] = useState<string | null>(null);

<CollectibleGrid aria-label="Garden collectibles">
  <CollectibleCard
    name="Mushroom lantern"
    illustration={<GameSprite name="mushroom" size={48} />}
    rarity="Seasonal"
    notification="dot"
    selected={selected === 'mushroom'}
    onClick={() => setSelected('mushroom')}
  />
  <CollectibleCard name="Pond friend" state="locked" />
  <CollectibleCard name="Unknown recipe" state="undiscovered" />
</CollectibleGrid>`,level:`import { LevelRing, StarRating } from '@nirvana/game-ui';

// value is the progress to the next level, 0 to 100.
<LevelRing level={24} value={68} />
<LevelRing level={7} value={30} size={56} />

// animate plays the stars in one by one, for a result screen.
<StarRating value={2} animate />
<StarRating value={3} max={3} size={26} />`,daily:`import { useState } from 'react';
import { DailyRewardCalendar, GameSticker } from '@nirvana/game-ui';

const [claimed, setClaimed] = useState(false);

<DailyRewardCalendar
  days={[
    { day: 1, reward: <GameSticker name="coin" size={30} />, label: '20 coins', state: 'claimed' },
    { day: 2, reward: <GameSticker name="star" size={30} />, label: 'a star', state: claimed ? 'claimed' : 'today' },
    { day: 3, reward: <GameSticker name="gift" size={30} />, label: 'a gift', state: 'upcoming' },
  ]}
  onClaim={() => setClaimed(true)}
/>`,milestones:`import { GameSprite, GameSticker, MilestoneTrack } from '@nirvana/game-ui';

<MilestoneTrack
  nodes={[
    { id: 'sprout', label: 'Sprout', reward: <GameSprite name="kale" />, state: 'claimed' },
    { id: 'harvest', label: 'Harvest', reward: <GameSticker name="basket" />, state: 'next' },
    { id: 'crown', label: 'Crown', reward: <GameSticker name="trophy" />, state: 'locked' },
  ]}
  onClaim={(id) => claimMilestone(id)}
/>`,achievements:`import { AchievementBadge, AchievementShelf, GameSticker } from '@nirvana/game-ui';

<AchievementShelf aria-label="Keepsakes">
  <AchievementBadge
    name="Morning gardener"
    icon={<GameSticker name="star" />}
    earnedOn="12 Jun"
  />
  {/* No earnedOn: the badge shows as not earned yet, with the hint. */}
  <AchievementBadge name="Night owl" hint="Play after dusk" />
</AchievementShelf>`,unlock:`import { useState } from 'react';
import { GameButton, GameSticker, UnlockReveal } from '@nirvana/game-ui';

const [unlocked, setUnlocked] = useState(false);

<UnlockReveal
  unlocked={unlocked}
  name="Moon pond"
  description="A quiet pool for evening visitors."
  illustration={<GameSticker name="sparkle" />}
  actionLabel="Place it"
  onAction={() => placeItem('moon-pond')}
/>
<GameButton variant="neutral" gameSize="sm" onClick={() => setUnlocked(true)}>
  Unlock
</GameButton>`,radial:`import { GameSprite, GameSticker, RadialProgress } from '@nirvana/game-ui';

<RadialProgress value={35} label="Wheat, 35% grown">
  <GameSprite name="kale" size={20} />
</RadialProgress>

// countdown drains the ring instead of filling it.
<RadialProgress value={18} tone="warning" countdown label="Refill in 18%" size={48}>
  <GameSticker name="clock" size={16} />
</RadialProgress>`,relationship:`import { RelationshipMeter } from '@nirvana/game-ui';

// level is the number of full hearts; progress fills the next heart, 0 to 100.
<RelationshipMeter name="Sleepy snail" level={3} progress={60} />
<RelationshipMeter name="Blossom" level={8} max={8} />`,upgrades:`import { CostButton, GameSticker, StatDeltaList, StatDeltaRow } from '@nirvana/game-ui';

<StatDeltaList
  stats={[
    { id: 'seats', label: 'Seats', from: 4, to: 6 },
    // direction="down" marks a stat where lower is the improvement.
    { id: 'speed', label: 'Serve time', from: '8s', to: '5s', direction: 'down' },
  ]}
/>
<StatDeltaRow label="Tip jar" from={12} to={20} />
<CostButton
  fullWidth
  label="Upgrade"
  price={320}
  balance={500}
  currencyIcon={<GameSticker name="coin" />}
/>`,stats:`import { DeltaValue, GameSprite, StatBarRow, StatGroup, ValuePill } from '@nirvana/game-ui';

<StatGroup heading="Street satisfaction" total={55} totalDelta={55}>
  <StatBarRow
    label="Shop recipes"
    icon={<GameSprite name="potato" />}
    iconTone="peach"
    value={100}
    delta={100}
  />
  <StatBarRow label="Cats" note="Unlock cats in a future mission" delta={0} />
</StatGroup>

<ValuePill value={95} unit="%" pillSize="lg" label="overall" />
<ValuePill value={9} total={10} tone="metric" label="recipe" />
<DeltaValue value={-3} label="queue" />`,objectives:`import { Objective, ObjectiveGroup } from '@nirvana/game-ui';

<ObjectiveGroup heading="Objectives">
  <Objective value={5} max={15}>
    Have 15 villagers
  </Objective>
  <Objective done>Build a boba shop</Objective>
</ObjectiveGroup>
<ObjectiveGroup heading="Optional" kind="optional">
  <Objective>Win in 12 days or less</Objective>
</ObjectiveGroup>`,quests:`import { useState } from 'react';
import { GameSprite, GameSticker, QuestList, QuestRow } from '@nirvana/game-ui';

const [claimed, setClaimed] = useState(false);

<QuestList aria-label="Daily quests">
  <QuestRow
    title="Water the flowerbeds"
    icon={<GameSprite name="sunflower" />}
    progress={{ current: 2, total: 3 }}
    reward={<><GameSticker name="coin" /> 15</>}
  />
  <QuestRow
    title="Match one garden puzzle"
    icon={<GameSprite name="kale" />}
    progress={{ current: 1, total: 1 }}
    state={claimed ? 'claimed' : 'claimable'}
    onClaim={() => setClaimed(true)}
  />
</QuestList>`,gacha:`import { useState } from 'react';
import { GachaReveal, GameSprite } from '@nirvana/game-ui';

const [revealed, setRevealed] = useState(false);

<GachaReveal
  revealed={revealed}
  onReveal={() => setRevealed(true)}
  name="Moss lantern"
  illustration={<GameSprite name="mushroom" size={56} />}
  rarity="Rare"
/>`,celebration:`import { useState } from 'react';
import { GameButton, GameSticker, RewardCelebration, useCoinFlight } from '@nirvana/game-ui';

const [open, setOpen] = useState(false);
// Needs CoinFlightProvider above it. The shell boot already adds it.
const flyCoins = useCoinFlight();

<GameButton
  onClick={(event) => {
    const target = document.getElementById('coin-counter');
    if (target) {
      flyCoins({ from: event.currentTarget, to: target, count: 6, onArrive: () => addCoins(5) });
    }
    setOpen(true);
  }}
>
  Harvest
</GameButton>
<RewardCelebration
  open={open}
  onOpenChange={setOpen}
  title="Harvest complete!"
  reward={<>+25 <GameSticker name="coin" /></>}
  illustration={<GameSticker name="basket" size={64} />}
/>`,motion:`import { GameSticker, ResourceCounter, useCountUp } from '@nirvana/game-ui';
import { ScreenTransition } from '@nirvana/shell/components/ScreenTransition';

// An iris wipe runs each time screenKey changes.
<ScreenTransition screenKey={route} pendingLabel="Opening the garden">
  {screen}
</ScreenTransition>

// useCountUp tweens a number toward its target.
function Score({ score }: { score: number }) {
  const shown = useCountUp(score, { duration: 400 });
  return <span className="font-numeric tabular-nums">{Math.round(shown)}</span>;
}

// ResourceCounter already counts up when its value changes.
<ResourceCounter value={coins} icon={<GameSticker name="coin" />} label="coins" variant="coins" />`,"loading-screen":`import { LoadingScreen } from '@nirvana/game-ui';
import { critterPortrait } from '@nirvana/critters/portraits';
import { percentLabel } from '@nirvana/phaser-kit/assets/loadProgress';

// shown is the load progress, 0 to 1.
<LoadingScreen
  value={shown}
  percent={percentLabel(shown)}
  label="Loading the garden"
  art="library-key-art"
  logo="library-logo"
  title="Nirvana UI"
  mascot={critterPortrait('maru')}
  tips={['Water the seed crate every morning for a bigger harvest.']}
  leaving={shown >= 1}
  onExited={() => setBooting(false)}
/>`},bn={panels:`import {
  GamePanel,
  GamePanelContent,
  GamePanelHeader,
  GameSprite,
} from '@nirvana/game-ui';

<GamePanel
  titleTab="Today's note"
  illustration={<GameSprite name="kale" size={54} />}
>
  <GamePanelHeader>
    <strong>Garden summary</strong>
  </GamePanelHeader>
  <GamePanelContent>Three beds are ready to harvest.</GamePanelContent>
</GamePanel>

{/* variant: cream (default), parchment, group, quiet, framed */}
<GamePanel variant="group" compact>
  <GamePanelContent>A pale block that groups related rows.</GamePanelContent>
</GamePanel>`,overlays:`import { useState } from 'react';
import { GameButton, GameDialog, GameDrawer, GameSticker } from '@nirvana/game-ui';

const [dialogOpen, setDialogOpen] = useState(false);
const [drawerOpen, setDrawerOpen] = useState(false);

<GameDialog
  open={dialogOpen}
  onOpenChange={setDialogOpen}
  placement="sheet"
  title="A small decision"
  description="Bring the seed trays inside?"
>
  <GameButton fullWidth onClick={() => setDialogOpen(false)}>Bring them in</GameButton>
</GameDialog>

<GameDrawer
  open={drawerOpen}
  onOpenChange={setDrawerOpen}
  title="Garden backpack"
  description="Everything you carry."
  illustration={<GameSticker name="bag" size={38} />}
  footer={<GameButton fullWidth onClick={() => setDrawerOpen(false)}>Done</GameButton>}
>
  {/* drawer content */}
</GameDrawer>`,empty:`import { EmptyGameState } from '@nirvana/game-ui';

<EmptyGameState
  title="The basket is waiting"
  description="Collect a garden keepsake and it will appear here."
  action={{
    label: 'Visit the garden',
    onClick: () => openGarden(),
    variant: 'secondary',
  }}
/>`,confirm:`import { useState } from 'react';
import { GameButton, GameConfirmDialog, GameSticker } from '@nirvana/game-ui';

const [open, setOpen] = useState(false);

<GameButton variant="destructive" onClick={() => setOpen(true)}>
  Reset garden
</GameButton>
<GameConfirmDialog
  open={open}
  onOpenChange={setOpen}
  title="Start over?"
  description="This clears every bed and keepsake. It cannot be undone."
  illustration={<GameSticker name="caution" />}
  confirmLabel="Reset everything"
  cancelLabel="Keep my garden"
  destructive
  onConfirm={() => resetGarden()}
/>`,accordion:`import { GameAccordion, GameSticker } from '@nirvana/game-ui';

<GameAccordion
  defaultValue="sounds"
  items={[
    {
      value: 'sounds',
      title: 'Sound and haptics',
      icon: <GameSticker name="music" />,
      content: 'Chimes, taps, and gentle buzzes.',
    },
    {
      value: 'account',
      title: 'Your garden',
      icon: <GameSticker name="home" />,
      content: 'Saved on this device.',
    },
  ]}
/>`,scroll:`import { GameSticker, ScrollShadow } from '@nirvana/game-ui';

{/* axis: 'horizontal' (default) or 'vertical'. surface matches the fade to the background. */}
<ScrollShadow surface="raised">
  <div className="flex min-w-max gap-2 py-1">
    <GameSticker name="coin" size={24} />
    <GameSticker name="heart" size={24} />
    <GameSticker name="star" size={24} />
  </div>
</ScrollShadow>`,spinner:`import { GameSpinner, paceLoad } from '@nirvana/game-ui';

<GameSpinner />
<GameSpinner size="lg" label="Growing…" />

{/* overlay covers the nearest positioned ancestor with a scrim */}
<div className="relative">
  <Board />
  <GameSpinner overlay label="Loading the board…" />
</div>

// Pace a load so a fast load shows nothing and a slow one does not flash.
const loadBoard = paceLoad(() => fetchBoard());`,sections:`import {
  CollectionHeader,
  GameBadge,
  GameSticker,
  ListSection,
} from '@nirvana/game-ui';

<CollectionHeader
  title="Garden friends"
  current={12}
  total={30}
  milestones={[25, 50, 75, 100]}
/>
<ListSection
  title="Recently met"
  description="Everyone who has visited this week."
  count={{ current: 3, total: 8 }}
  aside={<GameBadge icon={<GameSticker name="star" />} amount={3} label="3 stars" />}
>
  {/* list rows */}
</ListSection>`,detail:`import { useState } from 'react';
import { CostButton, GameSprite, GameSticker, ItemDetailSheet } from '@nirvana/game-ui';

const [open, setOpen] = useState(false);

<ItemDetailSheet
  open={open}
  onOpenChange={setOpen}
  name="Moss lantern"
  description="A soft green glow for the night beds."
  illustration={<GameSprite name="sunflower" size={56} />}
  rarity="Garden friend"
  tier="rare"
  stats={[{ id: 'light', label: 'Light radius', value: '3 beds' }]}
  action={
    <CostButton
      fullWidth
      label="Buy"
      price={180}
      balance={240}
      currencyIcon={<GameSticker name="coin" />}
      onClick={() => setOpen(false)}
    />
  }
/>

{/* Inside a drawer, pass GameDrawer detail={{ title, onBack, children: <ItemDetailBody ... /> }} */}`,carousel:`import { GameCarousel, GamePanel, GamePanelContent } from '@nirvana/game-ui';

<GameCarousel
  label="What is new"
  pages={[
    <GamePanel key="plant" variant="group" compact>
      <GamePanelContent>Plant anything</GamePanelContent>
    </GamePanel>,
    <GamePanel key="snails" variant="parchment" compact>
      <GamePanelContent>Meet the snails</GamePanelContent>
    </GamePanel>,
  ]}
/>`,sticky:`import { useState } from 'react';
import { GameButton, StickyActionBar, ValuePill } from '@nirvana/game-ui';

const [selected, setSelected] = useState(2);

{/* aboveNav lifts the bar clear of a bottom navigation bar */}
<StickyActionBar
  aboveNav
  summary={<ValuePill tone="bare" value={selected} total={6} label="beds chosen" />}
>
  <GameButton gameSize="sm" onClick={() => plant(selected)}>
    Plant
  </GameButton>
</StickyActionBar>`,edges:`import {
  CloseOrb,
  EdgeActionBar,
  GameButton,
  GamePanel,
  GamePanelContent,
  GamePanelSplit,
} from '@nirvana/game-ui';

<GamePanel>
  <GamePanelContent className="pb-8">
    <CloseOrb onClick={onClose} />
    <GamePanelSplit>
      <div>{/* identity column */}</div>
      <div>{/* controls column */}</div>
    </GamePanelSplit>
    <EdgeActionBar>
      <GameButton onClick={onDone}>Done</GameButton>
      <GameButton variant="neutral" onClick={onClose}>Back</GameButton>
    </EdgeActionBar>
  </GamePanelContent>
</GamePanel>`,report:`import { useState } from 'react';
import {
  GameButton,
  GameDialog,
  GameSticker,
  StatColumns,
  StatMedallion,
} from '@nirvana/game-ui';

const [open, setOpen] = useState(false);
const [tab, setTab] = useState('overall');

<GameDialog
  open={open}
  onOpenChange={setOpen}
  title="Daily report"
  size="wide"
  tabs={[
    { value: 'overall', label: 'Overall', icon: <GameSticker name="star" /> },
    { value: 'shops', label: 'Shops', icon: <GameSticker name="shop" /> },
  ]}
  tab={tab}
  onTabChange={setTab}
  body={
    <>
      <StatMedallion label="Money" icon={<GameSticker name="coin" />} value={44} delta={12} />
      <StatColumns columns={[{ id: 'shops', label: 'Shops', value: 9, delta: 9 }]} />
    </>
  }
>
  <GameButton onClick={() => setOpen(false)}>Next</GameButton>
</GameDialog>

{/* On a page: FrameTabs over a GamePanel, titled with <PanelBanner placement="inline"> */}`,shop:`import { GameShopCard, GameShopGrid, GameSprite, GameSticker } from '@nirvana/game-ui';

<GameShopGrid>
  <GameShopCard
    name="Blueberry seeds"
    description="Adds a berry patch to the next chapter."
    price={120}
    balance={coins}
    currencyIcon={<GameSticker name="coin" />}
    illustration={<GameSprite name="radish" size={52} />}
    badge="Seasonal"
    onPurchase={() => buy('blueberry-seeds')}
  />
  <GameShopCard
    name="Mushroom lamp"
    description="A warm little light for evening visitors."
    price={280}
    illustration={<GameSprite name="mushroom" size={52} />}
    owned
  />
</GameShopGrid>`,"shop-items":`import { useState } from 'react';
import {
  CostButton,
  DrawerPopup,
  GameSprite,
  GameSticker,
  ShopItemDetail,
  ShopItemGrid,
  ShopItemTile,
} from '@nirvana/game-ui';

const [from, setFrom] = useState<HTMLElement | null>(null);
const [open, setOpen] = useState(false);

<ShopItemGrid>
  <ShopItemTile
    name="Garden lantern"
    illustration={<GameSprite name="garden-lantern" size={72} />}
    price={240}
    balance={coins}
    currencyIcon={<GameSticker name="coin" size={14} />}
    onClick={(event) => {
      setFrom(event.currentTarget);
      setOpen(true);
    }}
  />
</ShopItemGrid>
<DrawerPopup open={open} onClose={() => setOpen(false)} label="Garden lantern" from={from}>
  <ShopItemDetail
    name="Garden lantern"
    illustration={<GameSprite name="garden-lantern" size={80} />}
    description="Lights the path for evening visitors."
    action={<CostButton label="Buy" price={240} balance={coins} currencyIcon={<GameSticker name="coin" size={16} />} />}
  />
</DrawerPopup>

{/* For a land upgrade, pass compare={{ before: <LandPlan ... />, after: <LandPlan ... />, ... }} */}`,"picker-tray":`import { useState } from 'react';
import {
  GameButton,
  GameSprite,
  GameSticker,
  PickerBadge,
  PickerCard,
  PickerStrip,
  PickerTray,
} from '@nirvana/game-ui';

const [picked, setPicked] = useState<string | null>(null);

<PickerTray
  label="Front step"
  info={<strong>Stone lantern</strong>}
  actions={<GameButton gameSize="sm" variant="success">Done</GameButton>}
>
  <PickerStrip label="Features for the front step">
    <PickerCard
      name="Garden lantern"
      illustration={<GameSprite name="garden-lantern" size={44} />}
      badge={<PickerBadge icon={<GameSticker name="charm" />} value="+8" />}
      prices={[{ amount: 240, icon: <GameSticker name="coin" size={13} /> }]}
      selected={picked === 'lantern'}
      onClick={() => setPicked('lantern')}
    />
  </PickerStrip>
</PickerTray>`,pricing:`import { useState } from 'react';
import {
  CurrencyPackCard,
  CurrencyPackGrid,
  InsufficientFunds,
  PriceTag,
} from '@nirvana/game-ui';

const [fundsOpen, setFundsOpen] = useState(false);

<PriceTag price={90} originalPrice={180} />

<CurrencyPackGrid>
  <CurrencyPackCard amount={500} price="$1.99" />
  <CurrencyPackCard amount={1600} price="$4.99" bonus={15} featured />
</CurrencyPackGrid>

<InsufficientFunds
  open={fundsOpen}
  onOpenChange={setFundsOpen}
  needed={450}
  balance={120}
  onOpenShop={() => openShop()}
/>`,ledger:`import { LedgerRow, MoneyLedger } from '@nirvana/game-ui';

{/* flow: 'out' (cost), 'in' (income), 'neutral'. size: 'default' or 'sm'. */}
<MoneyLedger
  rows={[
    { id: 'cost', label: 'Total cost', amount: '$4', flow: 'out' },
    { id: 'sell', label: 'Selling price', amount: '$9', flow: 'in' },
    { id: 'net', label: 'Profit', amount: '$5', flow: 'in', emphasize: true },
  ]}
/>

{/* One row by itself */}
<LedgerRow label="Tips" amount="$2" flow="in" size="sm" />`,"rewarded-ads":`import { useState } from 'react';
import {
  RewardedAdButton,
  RewardedAdLimitIndicator,
  RewardedAdModal,
  RewardedAdRewardPreview,
  GameSticker,
} from '@nirvana/game-ui';

const [open, setOpen] = useState(false);

<RewardedAdModal
  open={open}
  onOpenChange={setOpen}
  title="Production running slow"
  body={
    <RewardedAdRewardPreview
      art={<GameSticker name="energy" size={30} />}
      title="2x production for 5 minutes"
    />
  }
  counter={
    <RewardedAdLimitIndicator remaining={6} limit={10}>ads remaining today</RewardedAdLimitIndicator>
  }
  dismissLabel="Not now"
  action={
    <RewardedAdButton available={adReady} statusLabel={adReady ? undefined : 'Loading ad…'} onClick={showAd}>
      Watch Ad
    </RewardedAdButton>
  }
/>`,leaderboard:`import { GameSprite, Leaderboard } from '@nirvana/game-ui';

<Leaderboard
  highlight="b"
  unit="points"
  empty="Finish a run to set a score."
  entries={[
    { id: 'a', value: 2140, label: 'Big pumpkin', detail: '27 Sep', icon: <GameSprite name="pumpkin" size="css" /> },
    { id: 'b', value: 1675, label: 'Sunflower', detail: 'Today', icon: <GameSprite name="sunflower" size="css" /> },
  ]}
/>`,inventory:`import { useState } from 'react';
import { GameInventoryGrid, GameInventorySlot, GameSprite } from '@nirvana/game-ui';

const [selected, setSelected] = useState('watering-can');

<GameInventoryGrid aria-label="Garden backpack">
  <GameInventorySlot
    name="Watering can"
    icon={<GameSprite name="plot-watered" size={30} />}
    quantity={1}
    selected={selected === 'watering-can'}
    onSelect={() => setSelected('watering-can')}
  />
  <GameInventorySlot name="Empty slot" />
  <GameInventorySlot name="Locked slot" locked />
</GameInventoryGrid>`,dragging:`import { useRef } from 'react';
import { DragLayerProvider, GameInventorySlot, GameSprite, useDragLayer } from '@nirvana/game-ui';

function Furniture() {
  const { startDrag, dragging } = useDragLayer();
  const bed = useRef<HTMLDivElement>(null);
  return (
    <>
      <GameInventorySlot
        name="Lantern"
        icon={<GameSprite name="sunflower" />}
        onPointerDown={(event) =>
          startDrag({
            event,
            payload: 'lantern',
            ghost: <GameSprite name="sunflower" size={44} />,
            onDrop: (payload, target) => {
              if (bed.current?.contains(target)) place(String(payload));
            },
          })
        }
      />
      <div ref={bed} data-active={dragging || undefined} />
    </>
  );
}

// Wrap the screen once: <DragLayerProvider><Furniture /></DragLayerProvider>`},xn={...vn,..._n,...bn,...yn},Sn=[{group:`Foundations`,sections:[{id:`themes`,title:`Themes`,api:`GAME_THEME_REGISTRY · settings.theme · useActiveTheme`},{id:`palette`,title:`Semantic palette`,api:`GameTheme.colors`},{id:`derived`,title:`Base palette and derived tones`,api:`GameTheme.palette · derivePalette · GameTheme.ui (--game-ui-*)`},{id:`glyphs`,title:`Tint-ready glyphs`,api:`GameGlyph`},{id:`uiart`,title:`Meow Tower UI art`,api:`mt-currency · mt-shouts · mt-ribbons · mt-caps · mt-mascots · mt-reward-fx`},{id:`typography`,title:`Typography`,api:`GameTheme.typography`},{id:`stickers`,title:`Sticker set`,api:`GameSticker`},{id:`sprites`,title:`Sprite set`,api:`GameSprite`},{id:`layers`,title:`Layer scale`,api:`GameTheme.layer`},{id:`rarity`,title:`Rarity ladder`,api:`RarityTier · rarityBadgeClasses`},{id:`atoms`,title:`Shared atoms`,api:`GameDivider · CornerSlot · ClaimedTick`},{id:`frames`,title:`Icon frames`,api:`GameIconFrame`},{id:`badges`,title:`Badges`,api:`GameBadge`}]},{group:`Controls`,sections:[{id:`buttons`,title:`Buttons and icons`,api:`GameButton · GameIconButton`},{id:`play`,title:`Hero play button`,api:`PlayButton`},{id:`forms`,title:`Forms and selects`,api:`GameField · GameInput · GameSelect`},{id:`tabs`,title:`Category tabs`,api:`GameTabs`},{id:`settings`,title:`Settings and timers`,api:`GameSwitch · GameSlider · GameTimerChip`},{id:`choices`,title:`Checkboxes and radios`,api:`GameCheckbox · GameRadioGroup`},{id:`stepper`,title:`Number stepper`,api:`NumberStepper`},{id:`steppers`,title:`Polarity steppers`,api:`NumberStepper polarity · StepperChip`},{id:`selection`,title:`Selection chips`,api:`SelectionChip · SelectionChipGrid`},{id:`segmented`,title:`Segmented control`,api:`SegmentedControl`},{id:`settings-rows`,title:`Settings rows`,api:`SettingsRow · SettingsList`},{id:`search`,title:`Search and filters`,api:`GameSearchField · FilterChips · ViewToggle`},{id:`cost`,title:`Cost buttons`,api:`CostButton`},{id:`longpress`,title:`Long press and popovers`,api:`useLongPress · GameTooltip`}]},{group:`Surfaces`,sections:[{id:`panels`,title:`Illustrated panels`,api:`GamePanel`},{id:`overlays`,title:`Dialog and drawer`,api:`GameDialog · GameDrawer`},{id:`empty`,title:`Empty state`,api:`EmptyGameState`},{id:`confirm`,title:`Confirm dialog`,api:`GameConfirmDialog`},{id:`accordion`,title:`Accordion`,api:`GameAccordion`},{id:`scroll`,title:`Scroll shadow`,api:`ScrollShadow`},{id:`spinner`,title:`Loading spinner`,api:`GameSpinner`},{id:`sections`,title:`List sections`,api:`ListSection · CollectionHeader`},{id:`detail`,title:`Item detail`,api:`ItemDetailSheet · ItemDetailBody · GameDrawer detail`},{id:`carousel`,title:`Carousel`,api:`GameCarousel`},{id:`sticky`,title:`Sticky action bar`,api:`StickyActionBar`},{id:`edges`,title:`Panel edges`,api:`CloseOrb · EdgeActionBar · GamePanelSplit`},{id:`report`,title:`Report surface`,api:`GameDialog wide · FrameTabs · PanelBanner · StatMedallion · StatColumns`}]},{group:`HUD and navigation`,sections:[{id:`hud`,title:`HUD and progress`,api:`TopHud · ResourceCounter · GameProgress`},{id:`world`,title:`World chrome`,api:`WorldStatusCard · HudActionCluster · WorldOrbButton · HudCurrencyPill · HudMeter · WorldTabCard · ClaimCard · CharacterActionButton · HostHint`},{id:`nav`,title:`Bottom navigation`,api:`BottomGameNav`},{id:`lives`,title:`Lives, timers and counts`,api:`LivesMeter · GameTimerChip · ResourceCounter`},{id:`minigame`,title:`Mini-game bar`,api:`MinigameHud`},{id:`toasts`,title:`Notifications`,api:`useGameToast · useGameCallout`}]},{group:`Characters`,sections:[{id:`speech`,title:`Speech bubbles`,api:`SpeechBubble`},{id:`mail`,title:`Mail`,api:`LetterCard`},{id:`dialogue`,title:`Dialogue box`,api:`DialogueBox`},{id:`coaching`,title:`Coach marks and hints`,api:`CoachMark · HintPill`}]},{group:`Progression`,sections:[{id:`collectibles`,title:`Collectible cards`,api:`CollectibleCard`},{id:`level`,title:`Level and stars`,api:`LevelRing · StarRating`},{id:`daily`,title:`Daily rewards`,api:`DailyRewardCalendar`},{id:`milestones`,title:`Milestone track`,api:`MilestoneTrack`},{id:`achievements`,title:`Achievements`,api:`AchievementBadge · AchievementShelf`},{id:`unlock`,title:`Unlock reveal`,api:`UnlockReveal`},{id:`radial`,title:`Radial progress`,api:`RadialProgress`},{id:`relationship`,title:`Relationship hearts`,api:`RelationshipMeter`},{id:`upgrades`,title:`Upgrade deltas`,api:`StatDeltaRow · StatDeltaList`},{id:`stats`,title:`Stat rows and groups`,api:`StatGroup · StatBarRow · ValuePill · DeltaValue`},{id:`objectives`,title:`Mission briefing`,api:`ObjectiveGroup · Objective`},{id:`quests`,title:`Quests`,api:`QuestRow · QuestList`},{id:`gacha`,title:`Gacha reveal`,api:`GachaReveal`},{id:`celebration`,title:`Celebration and rewards`,api:`RewardCelebration · useCoinFlight`},{id:`motion`,title:`Motion and transitions`,api:`ScreenTransition · useCountUp`},{id:`loading-screen`,title:`Loading screen`,api:`LoadingScreen`}]},{group:`Economy`,sections:[{id:`shop`,title:`Garden shop`,api:`GameShopCard`},{id:`shop-items`,title:`Shop items and detail`,api:`ShopItemTile · ShopItemDetail · DrawerPopup · LandPlan`},{id:`picker-tray`,title:`Picker tray`,api:`PickerTray · PickerStrip · PickerCard · PickerBadge`},{id:`pricing`,title:`Pricing and packs`,api:`PriceTag · CurrencyPackCard · InsufficientFunds`},{id:`ledger`,title:`Money ledger`,api:`MoneyLedger · LedgerRow`},{id:`rewarded-ads`,title:`Rewarded ads`,api:`RewardedAdButton · RewardedAdRewardPreview · RewardedAdLimitIndicator · RewardedAdModal`},{id:`leaderboard`,title:`Leaderboard`,api:`Leaderboard`},{id:`inventory`,title:`Inventory`,api:`GameInventorySlot`},{id:`dragging`,title:`Drag and drop`,api:`DragLayerProvider · useDragLayer`}]}];Sn.flatMap(e=>e.sections.map(e=>e.id));var Cn={themes:{icon:`palette`,summary:`Pick a theme. Every control in the library repaints to match it.`},palette:{icon:`palette`,summary:`The semantic colour tokens that every component reads.`},derived:{icon:`sync`,summary:`Base palette inputs and the tones the theme derives from them.`},glyphs:{icon:`sparkle`,summary:`Single-colour glyphs that take the tint of the surrounding text.`},uiart:{icon:`charm`,summary:`Painted currency, shouts, ribbons, caps and mascots from the art pack.`},typography:{icon:`book`,summary:`Display, body and numeric type for the active theme.`},stickers:{icon:`star`,summary:`The full sticker icon set, shown on control discs.`},sprites:{icon:`gift`,summary:`Painted sprites, plain and with a sticker rim.`},layers:{icon:`set`,summary:`The z-index scale for HUD, sheets, dialogs and toasts.`},rarity:{icon:`gem`,summary:`Rarity tiers and the badge colours for each tier.`},atoms:{icon:`pin`,summary:`Dividers, corner slots and claimed ticks used inside larger parts.`},frames:{icon:`gem`,summary:`Framed wells that hold an icon or sprite at a fixed size.`},badges:{icon:`tag`,summary:`Small labels for counts, states and categories.`},buttons:{icon:`hand-point`,summary:`Buttons and icon buttons in every variant and size.`},play:{icon:`arrow-right`,summary:`The large call-to-action that starts a run.`},forms:{icon:`letter`,summary:`Text fields, inputs and selects with labels and hints.`},tabs:{icon:`menu`,summary:`Category tabs that switch between sibling views.`},settings:{icon:`settings`,summary:`Switches, sliders and timer chips for settings screens.`},choices:{icon:`tick`,summary:`Checkboxes and radio groups for binary and exclusive choices.`},stepper:{icon:`plus`,summary:`Increase or decrease a number in fixed steps.`},steppers:{icon:`minus`,summary:`Steppers that show whether a change is good or bad.`},selection:{icon:`tick`,summary:`Chips that select one or more options from a grid.`},segmented:{icon:`set`,summary:`A row of exclusive options shown as one control.`},"settings-rows":{icon:`settings`,summary:`Labelled rows that group settings into a list.`},search:{icon:`search`,summary:`A search field, filter chips and a grid or list toggle.`},cost:{icon:`coin`,summary:`Buttons that show a price and spend currency.`},longpress:{icon:`hand-point`,summary:`Press and hold to show more detail in a popover.`},panels:{icon:`book`,summary:`Illustrated panels that hold a screen or a card.`},overlays:{icon:`letter`,summary:`Dialogs and drawers that open over the current screen.`},empty:{icon:`basket`,summary:`What to show when a list or collection has nothing in it.`},confirm:{icon:`caution`,summary:`Ask the player to confirm or cancel an action.`},accordion:{icon:`arrow-down`,summary:`Collapsible sections that save vertical space.`},scroll:{icon:`arrow-down`,summary:`Edge shadows that show more content is off screen.`},spinner:{icon:`sync`,summary:`An animated spinner for work in progress.`},sections:{icon:`menu`,summary:`List sections and collection headers with counts.`},detail:{icon:`search`,summary:`A sheet or drawer page that shows one item in full.`},carousel:{icon:`arrow-right`,summary:`Swipe between cards one page at a time.`},sticky:{icon:`pin`,summary:`An action bar that stays at the bottom of a long screen.`},edges:{icon:`cross`,summary:`Close orbs, edge action bars and split panels.`},report:{icon:`book`,summary:`A wide report dialog with tabs, banners and stat columns.`},hud:{icon:`energy`,summary:`The top HUD, resource counters and progress bars.`},world:{icon:`home`,summary:`Status cards, orbs, pills and meters for the world screen.`},nav:{icon:`home`,summary:`The tab bar at the bottom of the screen.`},lives:{icon:`heart`,summary:`Lives, countdown timers and resource counts.`},minigame:{icon:`clock`,summary:`The score and timer bar for a mini-game.`},toasts:{icon:`bell`,summary:`Toasts and callouts for short messages.`},speech:{icon:`letter`,summary:`Speech bubbles for characters on the stage.`},mail:{icon:`letter`,summary:`Letters and mail cards from characters.`},dialogue:{icon:`book`,summary:`A dialogue box with a speaker and choices.`},coaching:{icon:`hand-point`,summary:`Coach marks and hint pills that teach a control.`},collectibles:{icon:`star`,summary:`Cards for items the player collects.`},level:{icon:`level`,summary:`Level rings and star ratings.`},daily:{icon:`calendar`,summary:`A calendar of daily login rewards.`},milestones:{icon:`trophy`,summary:`A track of rewards along a progress line.`},achievements:{icon:`achievements`,summary:`Achievement badges and the shelf that holds them.`},unlock:{icon:`lock-open`,summary:`The reveal for a newly unlocked item.`},radial:{icon:`sync`,summary:`Circular progress for timers and goals.`},relationship:{icon:`heart`,summary:`Heart meters for a relationship level.`},upgrades:{icon:`arrow-up`,summary:`Before and after values for an upgrade.`},stats:{icon:`rank`,summary:`Stat groups, bar rows, value pills and deltas.`},objectives:{icon:`tasks`,summary:`A mission briefing with grouped objectives.`},quests:{icon:`tasks`,summary:`Quest rows and lists with progress and rewards.`},gacha:{icon:`gift`,summary:`The reveal sequence for a random draw.`},celebration:{icon:`sparkle`,summary:`Reward celebrations and coins that fly to the counter.`},motion:{icon:`sparkle`,summary:`Screen transitions and animated count-ups.`},"loading-screen":{icon:`clock`,summary:`The loading screen shown while an area draws.`},shop:{icon:`shop`,summary:`Shop cards for items the player can buy.`},"shop-items":{icon:`bag`,summary:`Shop item tiles, the detail popup and the land plan.`},"picker-tray":{icon:`basket`,summary:`A tray of cards to pick an item to place.`},pricing:{icon:`tag`,summary:`Price tags, currency packs and the not-enough-coins state.`},ledger:{icon:`income`,summary:`A ledger of income and expenses.`},"rewarded-ads":{icon:`gift`,summary:`Buttons, previews and limits for rewarded ads.`},leaderboard:{icon:`rank`,summary:`A ranked list of players and scores.`},inventory:{icon:`bag`,summary:`Inventory slots with counts and states.`},dragging:{icon:`hand-point`,summary:`Drag items between slots with a floating preview.`}},Y=Sn.flatMap(e=>e.sections.map(t=>({...t,group:e.group,...Cn[t.id]}))),wn=new Map(Y.map(e=>[e.id,e]));function Tn(e){return e!==null&&wn.has(e)}function En(e){return`lab-${e}`}function Dn(e,t){let n=t.trim().toLowerCase();return!n||[e.title,e.api,e.summary,e.group].some(e=>e.toLowerCase().includes(n))}function On(e){return Sn.map(t=>({group:t.group,sections:Y.filter(n=>n.group===t.group&&Dn(n,e))})).filter(e=>e.sections.length>0)}function kn(e){return e?`?ui-lab=${e}`:`?ui-lab`}var An=(0,q.createContext)(null),jn=An.Provider;function X({page:e,className:t,current:n,onNavigate:r,children:i}){return(0,J.jsx)(`a`,{href:kn(e),className:t,"aria-current":n?`page`:void 0,onClick:t=>{t.metaKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),r?.(),Rt(e))},children:i})}function Mn({query:e,onNavigate:t}){let n=(0,q.useContext)(An),[r,a]=(0,q.useState)(new Set),o=On(e),s=e.trim().length>0,c=(0,q.useRef)(null);(0,q.useEffect)(()=>{c.current?.querySelector(`[aria-current="page"]`)?.scrollIntoView?.({block:`nearest`})},[n]);let l=e=>a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,J.jsxs)(`nav`,{className:`ui-lab__side-nav`,"aria-label":`Components`,ref:c,children:[(0,J.jsx)(X,{page:null,className:`ui-lab__side-link ui-lab__side-link--top`,current:n===null,onNavigate:t,children:`Overview`}),o.map(({group:e,sections:a})=>{let o=s||!r.has(e);return(0,J.jsxs)(`div`,{className:`ui-lab__side-group`,children:[(0,J.jsxs)(`button`,{type:`button`,className:`ui-lab__side-heading`,"aria-expanded":o,onClick:()=>l(e),children:[e,(0,J.jsx)(i,{name:o?`arrow-down`:`arrow-right`,size:14})]}),o?(0,J.jsx)(`ul`,{className:`ui-lab__side-list`,children:a.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsx)(X,{page:e.id,className:`ui-lab__side-link`,current:n===e.id,onNavigate:t,children:e.title})},e.id))}):null]},e)}),o.length===0?(0,J.jsxs)(`p`,{className:`ui-lab__side-empty`,children:[`No components match “`,e,`”.`]}):null]})}function Nn({query:e}){let[t,n]=(0,q.useState)(!1);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(S,{className:`ui-lab__menu-button`,"aria-label":`Components`,variant:`secondary`,gameSize:`sm`,"aria-haspopup":`dialog`,"aria-expanded":t,onClick:()=>n(!0),children:[(0,J.jsx)(i,{name:`menu`}),(0,J.jsx)(`span`,{className:`ui-lab__menu-label`,children:`Components`})]}),(0,J.jsx)(k,{open:t,onOpenChange:n,side:`left`,title:`Components`,description:`Open any page in the library.`,illustration:(0,J.jsx)(F,{name:`kale`,size:36}),footer:Jt()?(0,J.jsxs)(S,{fullWidth:!0,variant:`neutral`,onClick:()=>{n(!1),Gt(!1)},children:[(0,J.jsx)(i,{name:`arrow-left`}),`Back to game`]}):void 0,children:(0,J.jsx)(Mn,{query:e,onNavigate:()=>n(!1)})})]})}function Pn({query:e,themeName:t}){let n=On(e);return(0,J.jsxs)(`div`,{className:`ui-lab__overview`,children:[(0,J.jsxs)(`header`,{className:`ui-lab__hero`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__hero-text`,children:[(0,J.jsx)(`p`,{className:`eyebrow`,children:`Component library`}),(0,J.jsx)(`h1`,{children:`Nirvana UI`}),(0,J.jsxs)(`p`,{children:[`Nirvana games are made of illustrated building blocks: panels, buttons, HUD chrome, rewards and shop surfaces. Each page below shows one component with live demos in the`,` `,(0,J.jsx)(`strong`,{children:t}),` theme. Change the theme on the`,` `,(0,J.jsx)(X,{page:`themes`,className:`ui-lab__inline-link`,children:`Themes`}),` `,`page.`]})]}),(0,J.jsx)(`div`,{className:`ui-lab__hero-art`,"aria-hidden":`true`,children:(0,J.jsx)(F,{name:`critter-tabi`,size:112})})]}),n.map(({group:e,sections:t})=>(0,J.jsxs)(`section`,{className:`ui-lab__card-group`,"aria-label":e,children:[(0,J.jsx)(`h2`,{children:e}),(0,J.jsx)(`div`,{className:`ui-lab__card-grid`,children:t.map(e=>(0,J.jsxs)(X,{page:e.id,className:`ui-lab__card`,children:[(0,J.jsx)(`span`,{className:`ui-lab__card-icon mt-control mt-disc tone-sticker [--mt-size:48px]`,"aria-hidden":`true`,children:(0,J.jsx)(i,{name:e.icon,size:24})}),(0,J.jsx)(`strong`,{className:`ui-lab__card-title`,children:e.title}),(0,J.jsx)(`span`,{className:`ui-lab__card-summary`,children:e.summary})]},e.id))})]},e)),n.length===0?(0,J.jsxs)(`p`,{className:`ui-lab__side-empty`,children:[`No components match “`,e,`”.`]}):null]})}function Fn({id:e}){let t=Y.findIndex(t=>t.id===e),n=Y[t-1],r=Y[t+1];return(0,J.jsxs)(`nav`,{className:`ui-lab__pager`,"aria-label":`Previous and next component`,children:[n?(0,J.jsxs)(X,{page:n.id,className:`ui-lab__pager-link`,children:[(0,J.jsx)(`span`,{className:`ui-lab__pager-label`,children:`Previous`}),(0,J.jsxs)(`strong`,{children:[`« `,n.title]})]}):(0,J.jsx)(`span`,{}),r?(0,J.jsxs)(X,{page:r.id,className:`ui-lab__pager-link ui-lab__pager-link--next`,children:[(0,J.jsx)(`span`,{className:`ui-lab__pager-label`,children:`Next`}),(0,J.jsxs)(`strong`,{children:[r.title,` »`]})]}):null]})}var In=`(min-width: 768px)`;function Ln(e){let t=window.matchMedia(In);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)}function Rn(){return(0,q.useSyncExternalStore)(Ln,()=>window.matchMedia(In).matches)}function zn({id:e,title:t}){return(0,J.jsx)(`div`,{className:`ui-lab__device`,children:(0,J.jsxs)(`div`,{className:`ui-lab__device-screen`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__device-status`,"aria-hidden":`true`,children:[(0,J.jsx)(`span`,{children:`9:41`}),(0,J.jsx)(`span`,{className:`ui-lab__device-island`}),(0,J.jsx)(`span`,{className:`ui-lab__device-icons`,children:(0,J.jsx)(i,{name:`energy`,size:14})})]}),(0,J.jsx)(`iframe`,{className:`ui-lab__device-frame`,title:`${t} demo`,src:Et(e)},e)]})})}function Bn({code:e}){let[t,n]=(0,q.useState)(!1);return(0,q.useEffect)(()=>{if(!t)return;let e=window.setTimeout(()=>n(!1),1600);return()=>window.clearTimeout(e)},[t]),(0,J.jsxs)(`section`,{className:`ui-lab__usage`,"aria-labelledby":`lab-usage-title`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__usage-head`,children:[(0,J.jsx)(`h2`,{id:`lab-usage-title`,children:`Usage`}),(0,J.jsxs)(S,{variant:`neutral`,gameSize:`sm`,onClick:()=>{navigator.clipboard?.writeText(e).then(()=>n(!0))},children:[(0,J.jsx)(i,{name:t?`tick`:`book`}),t?`Copied`:`Copy`]})]}),(0,J.jsx)(`pre`,{className:`ui-lab__code`,children:(0,J.jsx)(`code`,{children:e.trim()})})]})}function Z({id:e,eyebrow:t,aside:n,children:r}){let i=(0,q.useContext)(An),a=Rn(),o=wn.get(e);if(!o)throw Error(`Unknown UI lab section: ${e}`);if(i!==e)return null;let s=(0,J.jsx)(`section`,{className:`ui-lab__demo`,"aria-label":`Demo`,children:(0,J.jsx)(`div`,{className:`ui-lab__section-body`,children:r})});return Zt?s:(0,J.jsxs)(`article`,{id:En(e),className:`ui-lab__page`,"aria-labelledby":`${e}-title`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__page-text`,children:[(0,J.jsxs)(`nav`,{className:`ui-lab__breadcrumbs`,"aria-label":`Breadcrumbs`,children:[(0,J.jsx)(X,{page:null,className:`ui-lab__inline-link`,children:`Components`}),(0,J.jsx)(`span`,{"aria-hidden":`true`,children:`›`}),(0,J.jsx)(`span`,{children:o.group})]}),(0,J.jsxs)(`header`,{className:`ui-lab__page-head`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__section-heading-text`,children:[t?(0,J.jsx)(`p`,{className:`eyebrow`,children:t}):null,(0,J.jsx)(`h1`,{id:`${e}-title`,children:o.title}),(0,J.jsx)(`p`,{className:`ui-lab__page-summary`,children:o.summary}),(0,J.jsx)(`code`,{className:`ui-lab__api`,children:o.api})]}),n?(0,J.jsx)(`div`,{className:`ui-lab__section-aside`,children:n}):null]})]}),a?(0,J.jsx)(zn,{id:e,title:o.title}):s,(0,J.jsx)(Bn,{code:xn[e]}),(0,J.jsx)(Fn,{id:e})]})}var Vn=[{value:`spring`,label:`Spring meadow`,icon:(0,J.jsx)(F,{name:`sunflower`,size:18})},{value:`summer`,label:`Summer orchard`,icon:(0,J.jsx)(F,{name:`radish`,size:18})},{value:`autumn`,label:`Autumn grove`,icon:(0,J.jsx)(F,{name:`kale`,size:18})}];function Hn(){let{notify:e}=m(),[t,n]=(0,q.useState)(`Willow Patch`),[r,i]=(0,q.useState)(`A quiet corner for berries and sleepy visitors.`),[a,o]=(0,q.useState)(`spring`);return(0,J.jsx)(Z,{id:`forms`,eyebrow:`Supporting boilerplate`,children:(0,J.jsxs)(`form`,{className:`ui-lab__form`,onSubmit:n=>{n.preventDefault(),e({title:`Garden details saved`,description:`${t} is ready for the ${a} season.`,tone:`success`})},children:[(0,J.jsx)(A,{label:`Garden name`,description:`Shown in the journal and on result cards.`,required:!0,children:(0,J.jsx)(en,{value:t,onChange:e=>n(e.target.value),required:!0})}),(0,J.jsx)(A,{label:`Garden note`,children:(0,J.jsx)(kt,{value:r,maxLength:140,onChange:e=>i(e.target.value)})}),(0,J.jsx)(A,{label:`Starting season`,children:(0,J.jsx)(qt,{options:Vn,value:a,onValueChange:o})}),(0,J.jsx)(A,{label:`Invite code`,error:`Use letters and numbers only.`,children:(0,J.jsx)(en,{defaultValue:`moss-?`})}),(0,J.jsx)(S,{type:`submit`,children:`Save garden`})]})})}function Un(){return(0,J.jsxs)(Z,{id:`tabs`,children:[(0,J.jsx)(Ve,{label:`Garden journal sections`,defaultValue:`tasks`,items:[{value:`tasks`,label:`Tasks`,icon:(0,J.jsx)(F,{name:`kale`,size:18}),content:(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Today’s tending`}),(0,J.jsx)(`p`,{children:`Water two beds and match one garden puzzle.`})]})})},{value:`friends`,label:`Friends`,icon:(0,J.jsx)(F,{name:`critter-tabi`,size:18}),content:(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Garden visitors`}),(0,J.jsx)(`p`,{children:`Three tiny friends are resting near the pond.`})]})})},{value:`badges`,label:`Badges`,icon:(0,J.jsx)(i,{name:`trophy`,size:18}),content:(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Recent keepsake`}),(0,J.jsx)(`p`,{children:`Morning Gardener · Finish a puzzle before noon.`})]})})},{value:`market`,label:`Market`,icon:(0,J.jsx)(i,{name:`shop`,size:18}),notification:2,content:(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Two new offers`}),(0,J.jsx)(`p`,{children:`A watering can, and a bag of choice seeds.`})]})})}]}),(0,J.jsx)(Ve,{layout:`grid`,label:`Shop categories, grid layout`,defaultValue:`kale`,items:[`kale`,`critter-tabi`,`critter-hina`,`critter-kuji`,`critter-mochi`,`critter-kon`,`critter-tanu`,`critter-matcha`].map(e=>({value:e,label:e,icon:(0,J.jsx)(F,{name:e,size:32}),content:(0,J.jsx)(`p`,{className:`text-sm`,children:`Grid tabs: as many square tiles a row as fit, for many categories on a phone.`})}))}),(0,J.jsx)(Ve,{layout:`bar`,label:`Sheet sections, bar layout`,defaultValue:`daily`,items:[{value:`daily`,label:`Daily`,icon:(0,J.jsx)(i,{name:`daily-chest`,size:24}),notification:3},{value:`main`,label:`Main`,icon:(0,J.jsx)(i,{name:`tasks`,size:24})},{value:`medals`,label:`Medals`,icon:(0,J.jsx)(i,{name:`achievements`,size:24}),notification:2},{value:`book`,label:`Book`,icon:(0,J.jsx)(i,{name:`book`,size:24})}].map(e=>({...e,content:(0,J.jsx)(`p`,{className:`text-sm`,children:`Bar tabs: up to five labelled sections in one row, the icon over the label and the count on the corner.`})}))})]})}function Wn(){let{notify:e}=m(),{callout:t,show:n}=sn(),[r,i]=(0,q.useState)(0);return(0,J.jsxs)(Z,{id:`toasts`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{gameSize:`sm`,variant:`neutral`,onClick:()=>e({title:`Journal updated`,description:`Your new note is tucked away safely.`}),children:`Neutral`}),(0,J.jsx)(S,{gameSize:`sm`,onClick:()=>e({title:`Seeds planted`,description:`Come back soon to see what sprouts.`,tone:`success`}),children:`Success`}),(0,J.jsx)(S,{gameSize:`sm`,onClick:()=>e({title:`Reward collected`,description:`You found 25 coins.`,tone:`reward`}),children:`Reward`}),(0,J.jsx)(S,{gameSize:`sm`,variant:`destructive`,onClick:()=>e({title:`Backpack full`,description:`Make a little room before collecting this.`,tone:`danger`}),children:`Warning`}),(0,J.jsx)(S,{gameSize:`sm`,variant:`neutral`,onClick:()=>e({title:`Watering can equipped`,tone:`neutral`,variant:`compact`}),children:`Compact`}),(0,J.jsx)(S,{gameSize:`sm`,variant:`neutral`,onClick:()=>e({title:`Copied to the journal`,tone:`success`,variant:`compact`,coalesceKey:`lab-copy`}),children:`Coalescing`})]}),(0,J.jsxs)(`div`,{className:`ui-lab__callout-stage`,children:[(0,J.jsx)(rt,{callout:t}),(0,J.jsx)(S,{gameSize:`sm`,onClick:()=>{let e=r+1;i(e),n({title:`${e} in a row!`,tone:e>=5?`reward`:`success`})},children:`Stage callout`})]})]})}function Gn(){let{notify:e}=m();return(0,J.jsx)(Z,{id:`shop`,eyebrow:`Economy boilerplate`,aside:(0,J.jsx)(v,{value:1240,icon:(0,J.jsx)(i,{name:`coin`}),label:`coins`,variant:`coins`}),children:(0,J.jsxs)(Me,{children:[(0,J.jsx)(O,{name:`Blueberry seeds`,description:`Adds a berry patch to the next garden chapter.`,price:120,currencyIcon:(0,J.jsx)(i,{name:`coin`}),illustration:(0,J.jsx)(F,{name:`radish`,size:52}),badge:`Seasonal`,onPurchase:()=>e({title:`Blueberry seeds purchased`,description:`They were added to your backpack.`,tone:`reward`})}),(0,J.jsx)(O,{name:`Mushroom lamp`,description:`A warm little light for evening visitors.`,price:280,currencyIcon:(0,J.jsx)(i,{name:`coin`}),illustration:(0,J.jsx)(F,{name:`mushroom`,size:52}),owned:!0}),(0,J.jsx)(O,{name:`Moon pond`,description:`A limited pond decoration for the night garden.`,price:450,currencyIcon:(0,J.jsx)(i,{name:`coin`}),illustration:(0,J.jsx)(i,{name:`sparkle`,size:52}),badge:`Limited`,soldOut:!0}),(0,J.jsx)(O,{name:`Rainbow arch`,description:`A tall arch for the garden gate.`,price:900,balance:339,currencyIcon:(0,J.jsx)(i,{name:`coin`}),illustration:(0,J.jsx)(i,{name:`sparkle`,size:52})})]})})}function Kn(){let[e,t]=(0,q.useState)(`watering-can`);return(0,J.jsx)(Z,{id:`inventory`,children:(0,J.jsxs)(st,{"aria-label":`Garden backpack`,children:[(0,J.jsx)(R,{name:`Watering can`,icon:(0,J.jsx)(F,{name:`plot-watered`,size:30}),quantity:1,selected:e===`watering-can`,onSelect:()=>t(`watering-can`)}),(0,J.jsx)(R,{name:`Blueberries`,icon:(0,J.jsx)(F,{name:`radish`,size:30}),quantity:12,selected:e===`blueberries`,onSelect:()=>t(`blueberries`)}),(0,J.jsx)(R,{name:`Acorns`,icon:(0,J.jsx)(F,{name:`mushroom`,size:30}),quantity:5,selected:e===`acorns`,onSelect:()=>t(`acorns`)}),(0,J.jsx)(R,{name:`Empty slot`}),(0,J.jsx)(R,{name:`Locked slot`,locked:!0})]})})}var qn=[[`stage`,`Ambient feedback over the board`],[`raised`,`Lifted inside its own container`],[`nav`,`Persistent screen chrome`],[`overlay`,`Dialogs, sheets, popovers`],[`toast`,`Speaks over an open dialog`],[`flight`,`Reward choreography`],[`coach`,`Teaching outranks everything`]];function Jn(){let e=I();return(0,J.jsx)(Z,{id:`layers`,children:(0,J.jsx)(`ol`,{className:`ui-lab__stack-list`,children:qn.map(([t,n])=>(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`code`,{children:t}),(0,J.jsx)(`span`,{className:`ui-lab__stack-value`,children:e.layer[t]}),(0,J.jsx)(`span`,{className:`ui-lab__stack-blurb`,children:n})]},t))})})}function Yn(){return(0,J.jsx)(Z,{id:`rarity`,children:(0,J.jsx)(`div`,{className:`ui-lab__row`,children:ie.map(e=>(0,J.jsxs)(`div`,{className:`ui-lab__rarity-swatch`,children:[(0,J.jsx)(`span`,{className:`ui-lab__rarity-well ${Mt[e]}`,children:(0,J.jsx)(F,{name:`sunflower`,size:30})}),(0,J.jsx)(`span`,{className:`ui-lab__rarity-chip ${Oe[e]}`,children:s[e]})]},e))})})}function Xn(){return(0,J.jsxs)(Z,{id:`atoms`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`coin`}),amount:240,label:`240 coins`,variant:`yellow`}),(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`star`}),amount:3,label:`3 stars`,variant:`cream`}),(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`heart`}),amount:`12/20`,label:`12 of 20 hearts`,variant:`sage`}),(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`coin`}),amount:900,label:`900 coins, not affordable`,variant:`short`})]}),(0,J.jsx)(ee,{items:[{id:`c`,icon:(0,J.jsx)(i,{name:`coin`}),amount:60,label:`60 coins`},{id:`s`,icon:(0,J.jsx)(i,{name:`star`}),amount:2,label:`2 stars`},{id:`l`,icon:(0,J.jsx)(F,{name:`kale`}),amount:5,label:`5 leaves`},{id:`f`,icon:(0,J.jsx)(F,{name:`sunflower`}),amount:1,label:`1 flower`},{id:`h`,icon:(0,J.jsx)(i,{name:`heart`}),amount:1,label:`1 heart`},{id:`e`,icon:(0,J.jsx)(i,{name:`energy`}),amount:4,label:`4 energy`}],max:4}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(U,{tone:`bare`,value:12,total:30,label:`friends found`}),(0,J.jsx)(U,{tone:`bare`,value:1240,total:2e3,label:`coins earned`,showPercent:!0}),(0,J.jsx)(pe,{}),(0,J.jsxs)(`span`,{className:`ui-lab__corner-demo`,children:[(0,J.jsx)(E,{size:`lg`,tone:`yellow`,icon:(0,J.jsx)(i,{name:`gift`})}),(0,J.jsx)(Ot,{children:(0,J.jsx)($e,{value:3,label:`3 new`})})]}),(0,J.jsxs)(`span`,{className:`ui-lab__corner-demo`,children:[(0,J.jsx)(E,{size:`lg`,tone:`blue`,icon:(0,J.jsx)(i,{name:`star`})}),(0,J.jsx)(We,{tone:`gold`,placement:`inset`,children:`New`})]})]}),(0,J.jsx)(Ee,{spacing:`sm`}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsxs)(`span`,{className:`ui-lab__locked-demo`,children:[(0,J.jsx)(i,{name:`gift`,size:44}),(0,J.jsx)(At,{requirement:`Reach level 7`})]}),(0,J.jsx)(ot,{value:1240,compact:!0,className:`ui-lab__big-number`}),(0,J.jsx)(ot,{value:1240,className:`ui-lab__big-number`})]})]})}var Zn=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`];function Qn(){return(0,J.jsxs)(Z,{id:`frames`,children:[(0,J.jsx)(`div`,{className:`ui-lab__row`,children:Zn.map(e=>(0,J.jsx)(E,{size:e,label:e,icon:(0,J.jsx)(F,{name:`kale`})},e))}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(E,{shape:`rounded`,tone:`surface`,label:`rounded`,icon:(0,J.jsx)(i,{name:`coin`})}),(0,J.jsx)(E,{shape:`button`,tone:`cream`,label:`button`,icon:(0,J.jsx)(i,{name:`coin`})}),(0,J.jsx)(E,{shape:`panel`,tone:`sage`,label:`panel`,icon:(0,J.jsx)(i,{name:`coin`})}),(0,J.jsx)(E,{shape:`pill`,tone:`yellow`,label:`pill`,icon:(0,J.jsx)(i,{name:`coin`})}),(0,J.jsx)(E,{shape:`button`,tone:`dashed`,raised:!1,label:`dashed`,icon:(0,J.jsx)(i,{name:`coin`})})]})]})}var $n=[{value:`seeds`,label:`Seeds`,count:8},{value:`decor`,label:`Decor`,count:12},{value:`tools`,label:`Tools`,count:3}];function er(){let[e,t]=(0,q.useState)(``),[n,r]=(0,q.useState)([]),[i,a]=(0,q.useState)(`grid`);return(0,J.jsxs)(Z,{id:`search`,children:[(0,J.jsx)(Ce,{value:e,onValueChange:t,label:`Search the garden`,placeholder:`Search the garden…`,resultCount:n.length?6:23}),(0,J.jsx)(le,{label:`Filter by kind`,options:$n,value:n,onValueChange:r}),(0,J.jsx)(zt,{value:i,onValueChange:a})]})}function tr(){return(0,J.jsx)(Z,{id:`cost`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(w,{label:`Plant`,price:40,balance:120,currencyIcon:(0,J.jsx)(i,{name:`coin`})}),(0,J.jsx)(w,{label:`Upgrade`,price:900,balance:120,currencyIcon:(0,J.jsx)(i,{name:`coin`})})]})})}function nr(){let[e,t]=(0,q.useState)(0),{handlers:n}=Qt(()=>t(e=>e+1));return(0,J.jsx)(Z,{id:`longpress`,children:(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(`button`,{type:`button`,className:`ui-lab__hold-target`,...n,children:`Hold me`}),(0,J.jsxs)(`span`,{className:`ui-lab__note`,children:[`Held `,e,` `,e===1?`time`:`times`]}),(0,J.jsx)(Ue,{content:`Opens on tap, not on hover — the only one of the two that exists on a phone.`,children:(0,J.jsxs)(S,{variant:`neutral`,gameSize:`sm`,children:[(0,J.jsx)(i,{name:`caution`}),`What is this?`]})})]})})}function rr(){return(0,J.jsxs)(Z,{id:`sections`,children:[(0,J.jsx)(dn,{title:`Garden friends`,current:12,total:30,milestones:[25,50,75,100]}),(0,J.jsx)(Ie,{title:`Recently met`,description:`Everyone who has visited this week.`,count:{current:3,total:8},aside:(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`star`}),amount:3,label:`3 stars`}),children:(0,J.jsx)(h,{label:`Loading friends`})}),(0,J.jsx)(Ie,{title:`Still to meet`,description:`One loading affordance, paced so a quick load shows nothing.`,children:(0,J.jsx)(h,{label:`Loading collection`})})]})}var ir=[{id:`pumpkin`,name:`Night pumpkin`,sprite:`pumpkin`,blurb:`Swells after dusk and keeps until the frost.`,rarity:`Seasonal`,tier:`epic`,stats:[{id:`grow`,label:`Ripens in`,value:`40s`},{id:`sells`,label:`Sells for`,value:28},{id:`picked`,label:`Picked`,value:6}]},{id:`carrot`,name:`Sugar carrot`,sprite:`carrot`,blurb:`The first thing anyone learns to grow.`,rarity:`Garden friend`,tier:`common`,stats:[{id:`grow`,label:`Ripens in`,value:`8s`},{id:`sells`,label:`Sells for`,value:10},{id:`picked`,label:`Picked`,value:41}]},{id:`sunflower`,name:`Tall sunflower`,sprite:`sunflower`,blurb:`Pays slowly, and the bees stay all season.`,rarity:`Prized`,tier:`rare`,stats:[{id:`grow`,label:`Ripens in`,value:`25s`},{id:`sells`,label:`Sells for`,value:22},{id:`picked`,label:`Picked`,value:12}]}];function ar(){let[e,t]=(0,q.useState)(!1),[n,r]=(0,q.useState)(`rare`),[o,s]=(0,q.useState)(!1),[c,l]=(0,q.useState)(null);return(0,J.jsxs)(Z,{id:`detail`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{onClick:()=>t(!0),children:`Open item detail`}),(0,J.jsx)(S,{variant:`secondary`,onClick:()=>{l(null),s(!0)},children:`Open collection drawer`}),(0,J.jsx)(zt,{label:`Tier`,value:n===`legendary`?`list`:`grid`,onValueChange:e=>r(e===`list`?`legendary`:`rare`)})]}),(0,J.jsx)(k,{open:o,onOpenChange:s,title:`Harvest book`,description:`Tap an entry — the drawer turns to its page.`,detail:c?{id:c.id,title:c.name,description:c.blurb,onBack:()=>l(null),children:(0,J.jsx)(ze,{illustration:(0,J.jsx)(F,{name:c.sprite,size:64}),rarity:c.rarity,tier:c.tier,stats:c.stats,rewards:[{id:`seeds`,icon:(0,J.jsx)(i,{name:`coin`}),amount:2,label:`seeds returned`}]}),footer:(0,J.jsx)(S,{fullWidth:!0,onClick:()=>l(null),children:`Back to the book`})}:null,children:(0,J.jsx)(a,{children:ir.map(e=>(0,J.jsx)(C,{name:e.name,description:e.blurb,rarity:e.rarity,tier:e.tier,illustration:(0,J.jsx)(F,{name:e.sprite,size:40}),onClick:()=>l(e)},e.id))})}),(0,J.jsx)(se,{open:e,onOpenChange:t,name:`Moss lantern`,description:`A soft green glow that keeps the night beds company.`,illustration:(0,J.jsx)(F,{name:`sunflower`,size:56}),rarity:`Garden friend`,tier:n,stats:[{id:`light`,label:`Light radius`,value:`3 beds`},{id:`cost`,label:`Upkeep`,value:`None`}],rewards:[{id:`c`,icon:(0,J.jsx)(i,{name:`coin`}),amount:12,label:`12 coins an hour`}],action:(0,J.jsx)(w,{fullWidth:!0,label:`Buy`,price:180,balance:240,currencyIcon:(0,J.jsx)(i,{name:`coin`}),onClick:()=>t(!1)})})]})}function or(){return(0,J.jsx)(Z,{id:`carousel`,children:(0,J.jsx)(Ae,{label:`What is new`,pages:[(0,J.jsx)(V,{variant:`group`,compact:!0,children:(0,J.jsx)(_,{className:`text-center`,children:(0,J.jsx)(`strong`,{className:`ui-lab__carousel-title`,children:`Plant anything`})})},`a`),(0,J.jsx)(V,{variant:`parchment`,compact:!0,children:(0,J.jsx)(_,{className:`text-center`,children:(0,J.jsx)(`strong`,{className:`ui-lab__carousel-title`,children:`Meet the snails`})})},`b`),(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsx)(_,{className:`text-center`,children:(0,J.jsx)(`strong`,{className:`ui-lab__carousel-title`,children:`Trade at the shop`})})},`c`)]})})}function sr(){let[e,t]=(0,q.useState)(2);return(0,J.jsx)(Z,{id:`sticky`,children:(0,J.jsxs)(`div`,{className:`ui-lab__sticky-demo`,children:[(0,J.jsx)(`div`,{className:`ui-lab__sticky-filler`}),(0,J.jsx)(ft,{aboveNav:!0,summary:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(U,{tone:`bare`,value:e,total:6,label:`beds chosen`}),(0,J.jsx)(K,{icon:(0,J.jsx)(i,{name:`coin`}),amount:e*40,label:`${e*40} coins total`,gameSize:`sm`})]}),children:(0,J.jsx)(S,{gameSize:`sm`,onClick:()=>t(e=>e%6+1),children:`Plant`})})]})})}function cr(){return(0,J.jsx)(Z,{id:`radial`,children:(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(lt,{value:35,label:`Wheat, 35% grown`,children:(0,J.jsx)(F,{name:`kale`,size:20})}),(0,J.jsx)(lt,{value:72,tone:`success`,label:`Stew, 72% cooked`,size:64,children:(0,J.jsx)(`span`,{className:`ui-lab__radial-text`,children:`2:14`})}),(0,J.jsx)(lt,{value:18,tone:`warning`,countdown:!0,label:`Refill in 18%`,size:48,children:(0,J.jsx)(i,{name:`clock`,size:16})})]})})}function lr(){return(0,J.jsx)(Z,{id:`relationship`,children:(0,J.jsxs)(`div`,{className:`ui-lab__stack`,children:[(0,J.jsx)(pn,{name:`Sleepy snail`,level:3,progress:60}),(0,J.jsx)(pn,{name:`Blossom`,level:8,max:8}),(0,J.jsx)(pn,{name:`Pebble`,level:0,progress:25,size:22})]})})}function ur(){return(0,J.jsx)(Z,{id:`upgrades`,children:(0,J.jsx)(V,{compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(Nt,{stats:[{id:`seats`,label:`Seats`,from:4,to:6},{id:`speed`,label:`Serve time`,from:`8s`,to:`5s`,direction:`down`},{id:`tip`,label:`Tip jar`,from:`12`,to:`20`}]}),(0,J.jsx)(Ee,{spacing:`sm`}),(0,J.jsx)(w,{fullWidth:!0,label:`Upgrade`,price:320,balance:500,currencyIcon:(0,J.jsx)(i,{name:`coin`})})]})})})}function dr(){let{startDrag:e,dragging:t}=xe(),[n,r]=(0,q.useState)(null),i=(0,q.useRef)(null);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(st,{children:[`Lantern`,`Bench`].map(t=>(0,J.jsx)(R,{name:t,quantity:2,icon:(0,J.jsx)(F,{name:t===`Bench`?`gem-blue`:`sunflower`}),onPointerDown:n=>e({event:n,payload:t,ghost:(0,J.jsx)(F,{name:t===`Bench`?`gem-blue`:`sunflower`,size:44}),onDrop:(e,t)=>{i.current?.contains(t)&&r(String(e))}})},t))}),(0,J.jsx)(`div`,{ref:i,className:`ui-lab__drop-target`,"data-active":t||void 0,children:n?`${n} placed here`:`Drag something onto this bed`})]})}function fr(){return(0,J.jsx)(Z,{id:`dragging`,children:(0,J.jsx)(ge,{children:(0,J.jsx)(dr,{})})})}var pr=(0,J.jsx)(F,{name:`sticker-ticket`,sticker:!0});function mr(){return(0,J.jsxs)(Z,{id:`stats`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__stack`,children:[(0,J.jsx)(b,{heading:`Beauty satisfaction`,total:40,totalDelta:40,children:(0,J.jsx)(d,{label:`Beauty`,icon:(0,J.jsx)(F,{name:`sunflower`}),iconTone:`pink`,value:57,delta:57})}),(0,J.jsxs)(b,{heading:`Street satisfaction`,total:55,totalDelta:55,children:[(0,J.jsx)(d,{label:`Shop recipes`,icon:(0,J.jsx)(F,{name:`potato`}),iconTone:`peach`,value:100,delta:100}),(0,J.jsx)(d,{label:`Shop prices`,icon:(0,J.jsx)(i,{name:`coin`}),iconTone:`yellow`,value:100,delta:100}),(0,J.jsx)(d,{label:`Shop diversity`,icon:(0,J.jsx)(F,{name:`pumpkin`}),iconTone:`sage`,value:50,delta:50})]}),(0,J.jsx)(b,{heading:`Bonus satisfaction`,total:0,totalDelta:0,totalTone:`empty`,children:(0,J.jsx)(d,{label:`Cats`,icon:(0,J.jsx)(F,{name:`chicken`}),iconTone:`blue`,note:`Unlock cats in a future mission`,delta:0})})]}),(0,J.jsx)(u,{value:33,barSize:`thick`,insetLabel:`5 / 15`,"aria-label":`Villagers, 5 of 15`,trailing:(0,J.jsx)(j,{value:5,label:`villagers`})}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(U,{value:95,unit:`%`,pillSize:`lg`,label:`overall`}),(0,J.jsx)(U,{value:9,total:10,label:`recipe`}),(0,J.jsx)(U,{value:57,unit:`%`,tone:`metric`,label:`beauty`}),(0,J.jsx)(U,{value:0,tone:`empty`,label:`bonus`}),(0,J.jsx)(j,{value:57,label:`beauty`}),(0,J.jsx)(j,{value:-3,label:`queue`}),(0,J.jsx)(j,{value:0,label:`bonus`})]})]})}function hr(){let[e,t]=(0,q.useState)(1),[n,r]=(0,q.useState)(0),[i,a]=(0,q.useState)(5),[o,s]=(0,q.useState)(3);return(0,J.jsxs)(Z,{id:`steppers`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(oe,{label:`Noodle`,badge:`$1`,value:e,onValueChange:t,max:9}),(0,J.jsx)(oe,{label:`Shrimp`,badge:`$3`,value:n,onValueChange:r,max:9}),(0,J.jsx)(oe,{label:`Profit`,value:i,onValueChange:a,max:20,children:(0,J.jsxs)(`span`,{className:`text-game-success-strong`,children:[`$`,i]})})]}),(0,J.jsxs)(`div`,{className:`ui-lab__row gap-8`,children:[(0,J.jsx)(f,{polarity:!0,label:`Seeds`,value:o,onValueChange:s}),(0,J.jsx)(f,{polarity:!0,size:`sm`,label:`Rows`,value:o,onValueChange:s}),(0,J.jsx)(f,{label:`Pages`,value:o,onValueChange:s})]})]})}function gr(){return(0,J.jsx)(Z,{id:`ledger`,children:(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(V,{compact:!0,className:`min-w-56`,children:(0,J.jsx)(_,{children:(0,J.jsx)(x,{rows:[{id:`cost`,label:`Total cost`,amount:`$4`,flow:`out`},{id:`sell`,label:`Selling price`,amount:`$9`,flow:`in`},{id:`net`,label:`Profit`,amount:`$5`,flow:`in`}]})})}),(0,J.jsx)(V,{compact:!0,className:`min-w-56`,children:(0,J.jsx)(_,{children:(0,J.jsx)(x,{size:`sm`,rows:[{id:`c`,label:`Cost`,amount:`$2`,flow:`out`},{id:`s`,label:`Selling price`,amount:`$4`,flow:`in`}]})})})]})})}function _r(){let[e,t]=(0,q.useState)(!1);return(0,J.jsxs)(Z,{id:`rewarded-ads`,children:[(0,J.jsx)(`div`,{className:`ui-lab__row`,children:[{key:`ready`,label:`Ready`,available:!0},{key:`loading`,label:`Loading`,status:`Loading ad…`,available:!1,busy:!0},{key:`cooldown`,label:`Cooldown`,status:`Available in 18s`,available:!1},{key:`unavailable`,label:`Unavailable`,status:`No ad available right now`,available:!1},{key:`limit`,label:`Daily limit`,status:`Daily ad limit reached`,available:!1}].map(e=>(0,J.jsx)(V,{compact:!0,className:`w-[min(16rem,100%)] min-w-0`,children:(0,J.jsxs)(_,{className:`grid gap-2 p-(--ui-pad-card)`,children:[(0,J.jsx)(`p`,{className:`eyebrow`,children:e.label}),(0,J.jsx)(St,{available:e.available,busy:e.busy,statusLabel:e.status,leadingIcon:pr,fullWidth:!0,children:`Watch Ad`})]})},e.key))}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(V,{compact:!0,className:`min-w-[min(18rem,100%)]`,children:(0,J.jsxs)(_,{className:`grid gap-3`,children:[(0,J.jsx)(on,{art:(0,J.jsx)(i,{name:`coin`,size:30}),title:`+2,000 coins`,detail:`Straight into the till`}),(0,J.jsx)(nt,{remaining:7,limit:10,label:`7 of 10 ads remaining today`,children:`ads remaining today`}),(0,J.jsx)(nt,{remaining:0,limit:10,label:`Daily ad limit reached`,children:`Come back tomorrow.`})]})}),(0,J.jsx)(V,{compact:!0,className:`min-w-[min(15rem,100%)]`,children:(0,J.jsx)(_,{children:(0,J.jsx)(S,{variant:`secondary`,onClick:()=>t(!0),children:`Open the offer`})})})]}),(0,J.jsx)(nn,{open:e,onOpenChange:t,title:`Production running slow`,description:`The line is the bottleneck right now.`,illustration:(0,J.jsx)(F,{name:`carrot`,size:64,sticker:!0}),body:(0,J.jsx)(on,{art:(0,J.jsx)(i,{name:`energy`,size:30}),title:`2x production for 5 minutes`,detail:`Every machine, twice as fast.`}),counter:(0,J.jsx)(nt,{remaining:6,limit:10,label:`6 of 10 ads remaining today`,children:`ads remaining today`}),dismissLabel:`Not now`,action:(0,J.jsx)(St,{available:!0,leadingIcon:pr,onClick:()=>t(!1),children:`Watch Ad`})})]})}function vr(){return(0,J.jsx)(Z,{id:`leaderboard`,children:(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(V,{compact:!0,className:`min-w-[min(18rem,100%)]`,children:(0,J.jsx)(_,{children:(0,J.jsx)(Te,{highlight:`b`,entries:[{id:`a`,value:2140,label:`Big pumpkin`,detail:`27 Sep`,icon:(0,J.jsx)(F,{name:`pumpkin`,size:`css`})},{id:`b`,value:1675,label:`Sunflower`,detail:`Today`,icon:(0,J.jsx)(F,{name:`sunflower`,size:`css`})},{id:`c`,value:980,label:`Carrot`,detail:`25 Sep`,icon:(0,J.jsx)(F,{name:`carrot`,size:`css`})}]})})}),(0,J.jsx)(V,{compact:!0,className:`min-w-[min(18rem,100%)]`,children:(0,J.jsx)(_,{children:(0,J.jsx)(Te,{entries:[],empty:`Finish a run to set a score.`})})})]})})}var yr=[`Matcha latte`,`Corndog`,`Instant noodles`,`Soda`,`Onigiri`,`Taiyaki`];function br(){let[e,t]=(0,q.useState)([`Matcha latte`,`Onigiri`,`Taiyaki`]),n=e.length>=3;return(0,J.jsx)(Z,{id:`selection`,children:(0,J.jsx)(o,{instruction:`Select 3 items to sell in your shop`,children:yr.map(r=>(0,J.jsx)(jt,{label:r,selected:e.includes(r),atCapacity:n,onSelectedChange:e=>t(t=>e?[...t,r]:t.filter(e=>e!==r))},r))})})}function xr(){return(0,J.jsx)(Z,{id:`objectives`,children:(0,J.jsx)(`div`,{className:`ui-lab__row`,children:(0,J.jsx)(V,{compact:!0,className:`max-w-80`,children:(0,J.jsxs)(_,{className:`grid gap-4`,children:[(0,J.jsxs)(`div`,{className:`grid gap-1`,children:[(0,J.jsx)(`h3`,{className:`font-display text-xl font-bold`,children:`Bobalicious`}),(0,J.jsx)(`p`,{className:`text-sm text-eyebrow`,children:`Who doesn’t love bubble tea?`})]}),(0,J.jsxs)(y,{heading:`Objectives`,children:[(0,J.jsx)(M,{children:`Have 15 villagers and 75% satisfaction`}),(0,J.jsx)(M,{done:!0,children:`Build a boba shop`})]}),(0,J.jsx)(y,{heading:`Optional`,kind:`optional`,children:(0,J.jsx)(M,{children:`Win in 12 days or less`})})]})})})})}function Sr(){let[e,t]=(0,q.useState)(!1);return(0,J.jsx)(Z,{id:`edges`,children:(0,J.jsx)(`div`,{className:`ui-lab__row`,children:(0,J.jsx)(V,{className:`max-w-lg`,children:(0,J.jsxs)(_,{className:`pb-8`,children:[e?null:(0,J.jsx)(Tt,{onClick:()=>t(!0)}),(0,J.jsxs)(Xe,{children:[(0,J.jsxs)(`div`,{className:`grid justify-items-center gap-2`,children:[(0,J.jsx)(`span`,{className:`font-display text-sm font-bold`,children:`Shop name`}),(0,J.jsx)(`span`,{className:`rounded-pill bg-game-sage px-4 py-1.5 font-display text-base font-bold text-secondary-foreground`,children:`Ramen Calm`}),(0,J.jsx)(W,{value:2}),(0,J.jsx)(F,{name:`potato`,size:56})]}),(0,J.jsxs)(`div`,{className:`grid content-start gap-3`,children:[(0,J.jsx)(`p`,{className:`text-center font-display text-sm font-bold`,children:`Customize your ramen`}),(0,J.jsx)(x,{size:`sm`,rows:[{id:`c`,label:`Total cost`,amount:`$4`,flow:`out`},{id:`s`,label:`Selling price`,amount:`$9`,flow:`in`}]})]})]}),(0,J.jsxs)(It,{children:[(0,J.jsx)(S,{onClick:()=>t(!1),children:`Done`}),(0,J.jsx)(S,{variant:`neutral`,children:`Back`})]})]})})})})}var Cr=[`cream`,`yellow`,`peach`,`pink`,`sage`,`blue`];function wr(){return(0,J.jsxs)(Z,{id:`badges`,children:[(0,J.jsx)(`div`,{className:`ui-lab__row`,children:Cr.map(e=>(0,J.jsx)(K,{variant:e,children:e},e))}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[Cr.map(e=>(0,J.jsx)(K,{variant:e,gameSize:`sm`,children:e},e)),(0,J.jsxs)(K,{gameSize:`sm`,children:[(0,J.jsx)(i,{name:`clock`}),`2 days`]}),(0,J.jsxs)(K,{variant:`sage`,children:[(0,J.jsx)(i,{name:`tick`}),`Claimed`]})]}),(0,J.jsx)(`div`,{className:`ui-lab__row`,children:ie.map(e=>(0,J.jsx)(K,{className:Oe[e],children:s[e]},e))}),(0,J.jsxs)(`div`,{className:`ui-lab__row rounded-card bg-game-sage text-fill-ink p-3`,children:[(0,J.jsxs)(K,{variant:`hud`,children:[(0,J.jsx)(i,{name:`clock`}),`12:40`]}),(0,J.jsx)(K,{variant:`hud`,gameSize:`sm`,children:`8 left`})]})]})}var Tr=[{value:`overall`,label:`Overall`,icon:(0,J.jsx)(i,{name:`star`})},{value:`shops`,label:`Shops`,icon:(0,J.jsx)(i,{name:`shop`})},{value:`satisfaction`,label:`Satisfaction`,icon:(0,J.jsx)(i,{name:`heart`})}];function Er(){return(0,J.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto]`,children:[(0,J.jsxs)(`div`,{className:`grid content-start gap-4`,children:[(0,J.jsx)(z,{label:`Satisfaction`,icon:(0,J.jsx)(F,{name:`critter-tabi`}),value:`43%`,delta:43}),(0,J.jsx)(Lt,{columns:[{id:`b`,label:`Beauty`,value:0,delta:0},{id:`s`,label:`Street`,value:43,delta:43},{id:`o`,label:`Bonus`,value:0,delta:0}]}),(0,J.jsx)(z,{label:`Villagers`,icon:(0,J.jsx)(F,{name:`chicken`}),value:5,delta:5}),(0,J.jsx)(z,{label:`Money`,icon:(0,J.jsx)(i,{name:`coin`}),value:`$44`,delta:44}),(0,J.jsx)(Lt,{columns:[{id:`shops`,label:`Shops`,value:`$9`,delta:9,flow:`in`},{id:`other`,label:`Other`,value:`$35`,delta:35,flow:`in`}]})]}),(0,J.jsx)(V,{variant:`group`,compact:!0,children:(0,J.jsxs)(_,{className:`grid gap-4`,children:[(0,J.jsxs)(y,{heading:`Mission`,children:[(0,J.jsx)(M,{checkbox:!0,value:5,max:15,children:`Have at least 15 villagers`}),(0,J.jsx)(M,{checkbox:!0,value:43,max:75,countLabel:`43 / 75%`,children:`Reach 75% satisfaction`}),(0,J.jsx)(M,{checkbox:!0,value:0,max:1,children:`Build a boba shop`})]}),(0,J.jsx)(y,{heading:`Optional`,kind:`optional`,children:(0,J.jsx)(M,{checkbox:!0,done:!0,value:1,max:12,children:`Finish in 12 days or less`})})]})}),(0,J.jsxs)(`div`,{className:`grid content-start justify-items-center gap-4`,children:[(0,J.jsx)(bt,{icon:(0,J.jsx)(F,{name:`chicken`}),label:`Tanuki found`,found:1,total:1,iconTone:`sage`}),(0,J.jsx)(bt,{icon:(0,J.jsx)(F,{name:`pumpkin`}),label:`Trash collected`,found:1,total:1,iconTone:`blue`}),(0,J.jsx)(x,{className:`w-full`,rows:[{id:`t`,label:`Total`,amount:`$35`,flow:`in`,emphasize:!0}]})]})]})}function Dr(){let[e,t]=(0,q.useState)(`overall`),[n,r]=(0,q.useState)(!1),[i,a]=(0,q.useState)(`overall`);return(0,J.jsxs)(Z,{id:`report`,children:[(0,J.jsx)(`div`,{className:`rounded-card bg-game-peach/45 p-3 pt-14 xs:p-6 xs:pt-14`,children:(0,J.jsxs)(`div`,{className:`relative`,children:[(0,J.jsx)(Ut,{items:Tr,value:e,onValueChange:t,label:`Report pages`}),(0,J.jsx)(Ct,{variant:`both`}),(0,J.jsx)(V,{className:`relative rounded-tl-none`,children:(0,J.jsxs)(_,{className:`grid gap-5 pb-8`,children:[(0,J.jsx)(yt,{placement:`inline`,className:`mx-auto`,children:`Daily report`}),(0,J.jsx)(Er,{}),(0,J.jsxs)(It,{children:[(0,J.jsx)(S,{children:`Next`}),(0,J.jsx)(S,{variant:`neutral`,children:`Close`})]})]})})]})}),(0,J.jsxs)(`div`,{className:`ui-lab__row`,children:[(0,J.jsx)(S,{variant:`neutral`,onClick:()=>r(!0),children:`Open as scrimless dialog`}),(0,J.jsx)(yt,{placement:`inline`,children:`Daily report`}),(0,J.jsx)(yt,{placement:`inline`,tone:`cream`,children:`Ramen Calm`})]}),(0,J.jsxs)(mt,{open:n,onOpenChange:r,title:`Daily report`,size:`wide`,scrim:!1,tabs:Tr,tab:i,onTabChange:a,body:(0,J.jsx)(Er,{}),children:[(0,J.jsx)(S,{onClick:()=>r(!1),children:`Next`}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>r(!1),children:`Close`})]})]})}function Or(){let[e,t]=(0,q.useState)(880),[n,r]=(0,q.useState)(37);return(0,J.jsxs)(Z,{id:`world`,children:[(0,J.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-6 rounded-card bg-game-sage/45 p-6`,children:[(0,J.jsxs)(qe,{children:[(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`calendar`}),"aria-label":`Open the report`,pullTab:!0}),(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`tick`}),"aria-label":`Open missions`,pullTab:!0}),(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`letter`}),"aria-label":`Open the news`,pullTab:!0,notification:2}),(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`settings`}),"aria-label":`Open settings`,pullTab:!0})]}),(0,J.jsxs)(ht,{children:[(0,J.jsx)(rn,{hour:20,time:`8:00 pm`}),(0,J.jsx)(Pt,{day:4})]})]}),(0,J.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center gap-3 rounded-card bg-game-sage/45 p-6`,children:[(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`plus`}),label:`Zoom in`}),(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`minus`}),label:`Zoom out`}),(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`pin`}),label:`Recentre`,disabled:!0}),(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`settings`}),label:`Settings`,tone:`surface`}),(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`palette`}),label:`Decorate`,tone:`primary`,active:!0}),(0,J.jsx)(P,{orbSize:`lg`,icon:(0,J.jsx)(i,{name:`sparkle`}),label:`Hint, 3 left`,count:3}),(0,J.jsx)(P,{orbSize:`lg`,icon:(0,J.jsx)(i,{name:`sparkle`}),label:`Hint, 0 left`,count:0,disabled:!0})]}),(0,J.jsxs)(`div`,{className:`mt-4 grid gap-6 rounded-card bg-game-blue/45 p-6`,children:[(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,J.jsx)(ne,{value:n%10,max:10,level:Math.floor(n/10)+1,icon:(0,J.jsx)(i,{name:`heart`}),label:`Friendship`,tone:`tone-danger`}),(0,J.jsx)(Fe,{value:e,icon:(0,J.jsx)(i,{name:`coin`}),label:`Coins`,onAdd:()=>void 0,affordAt:[900,1e3]}),(0,J.jsx)(Fe,{value:7,icon:(0,J.jsx)(i,{name:`gem`}),label:`Gems`}),(0,J.jsx)(un,{art:(0,J.jsx)(F,{name:`chicken`,size:32}),label:`Collection`,notification:!0})]}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-6`,children:[(0,J.jsx)(Fe,{value:e*1e3,icon:(0,J.jsx)(i,{name:`coin`}),label:`dollars`,format:e=>`$${e.toLocaleString()}`,stream:!0}),(0,J.jsx)(cn,{icon:(0,J.jsx)(i,{name:`income`}),label:`Revenue: 1,075 a second`,children:`1,075/s`}),(0,J.jsxs)(cn,{icon:(0,J.jsx)(F,{name:`carrot`,size:`var(--hud-orb)`}),label:`Selling carrots, three stars`,onClick:()=>void 0,children:[(0,J.jsx)(`span`,{className:`font-display text-sm font-bold`,children:`Carrots`}),(0,J.jsx)(W,{value:3,max:5,size:11})]}),(0,J.jsx)(cn,{icon:(0,J.jsx)(F,{name:`sunflower`,size:`var(--hud-orb)`}),badge:(0,J.jsx)(i,{name:`caution`}),label:`Production: 237 a second, the bottleneck`,tone:`danger`,attention:!0,onClick:()=>void 0,children:`237/s`})]}),(0,J.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,J.jsx)(S,{variant:`neutral`,onClick:()=>t(e=>e+25),children:`Earn 25`}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>t(e=>Math.max(0,e-40)),children:`Spend 40`}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>r(e=>e+2),children:`Blessing +2`})]}),(0,J.jsx)(ct,{speaker:`The keeper`,avatar:(0,J.jsx)(F,{name:`critter-tabi`,size:40}),children:`Tap the glowing spot to plant your first seed.`}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-end gap-3 pt-6`,children:[(0,J.jsx)(Re,{className:`w-24`,label:`Garden`,art:(0,J.jsx)(F,{name:`sunflower`,size:44})}),(0,J.jsx)(Re,{className:`w-24`,label:`Basket`,art:(0,J.jsx)(F,{name:`basket`,size:40}),notification:!0,notificationLabel:`New`}),(0,J.jsx)(fn,{className:`w-48`,title:`Plant three`,value:2,target:3,art:(0,J.jsx)(F,{name:`carrot`,size:36})}),(0,J.jsx)(fn,{className:`w-48`,title:`First harvest`,value:1,target:1,onClaim:()=>void 0}),(0,J.jsx)(an,{label:`Sing`,art:(0,J.jsx)(F,{name:`critter-tabi`,size:72}),progress:.6,count:2})]})]})]})}var kr={id:`crate`,name:`Seed crate`,sprite:`seed-crate`,price:12,charm:3,owned:1,description:`A wooden crate of seed packets. Visitors stop here to browse.`},Q=[kr,{id:`lantern`,name:`Garden lantern`,sprite:`garden-lantern`,price:120,charm:8,description:`A paper lantern on a post that glows at dusk.`},{id:`pine`,name:`Bonsai pine`,sprite:`bonsai`,price:240,charm:10,owned:3,description:`A small pine, trimmed by the host every spring.`},{id:`bowl`,name:`Fish bowl`,sprite:`goldfish-bowl`,price:900,charm:14,description:`A bowl for the cats who visit. It is never empty for long.`},{id:`birdbath`,name:`Bird bath`,sprite:`stone-birdbath`,price:360,charm:11,locked:`Back garden`,description:`A stone bowl of water for the garden birds.`},{id:`statue`,name:`Cat statue`,sprite:`cat-statue`,price:1800,charm:22,locked:`Back garden`,description:`A stone cat that keeps watch at the gate.`}],$=400;function Ar(e){let t=[{id:`charm`,icon:(0,J.jsx)(i,{name:`charm`,size:`1.1em`}),label:`Adds charm`,value:`+${e.charm}`},{id:`yield`,icon:(0,J.jsx)(i,{name:`coin`,size:`1.1em`}),label:`Each visit leaves`,value:`2 coins`},{id:`set`,icon:(0,J.jsx)(i,{name:`set`,size:`1.1em`}),label:`Part of Pilgrim’s way`,value:`1 / 3`}];return e.owned&&t.push({id:`owned`,icon:(0,J.jsx)(i,{name:`bag`,size:`1.1em`}),label:`Owned`,value:`${e.owned}, 1 placed`}),e.locked&&t.push({id:`unlock`,icon:(0,J.jsx)(i,{name:`caution`,size:`1.1em`}),label:`To unlock: open ${e.locked}`,tone:`warn`}),t}function jr(){let{notify:e}=m(),[t,n]=(0,q.useState)(!1),[r,a]=(0,q.useState)(null),o=kr,s=e=>(0,J.jsxs)(Ze,{children:[Q.map(t=>(0,J.jsx)(Ye,{name:t.name,illustration:(0,J.jsx)(F,{name:t.sprite,size:72}),price:t.price,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:14}),balance:$,owned:(t.owned??0)>0,count:t.owned,locked:t.locked!==void 0,onClick:r=>{a({item:t,from:e?r.currentTarget:null}),n(!0)}},t.id)),(0,J.jsx)(Ye,{name:`Garden lantern`,illustration:(0,J.jsx)(F,{name:`garden-lantern`,size:72}),status:`Top level`,onClick:()=>n(!0)})]});return(0,J.jsxs)(Z,{id:`shop-items`,eyebrow:`Economy`,aside:(0,J.jsx)(v,{value:$,icon:(0,J.jsx)(i,{name:`coin`}),label:`coins`,variant:`coins`}),children:[(0,J.jsx)(`p`,{className:`m-0 text-sm text-muted-foreground`,children:`Tiles: affordable, owned (tick), owned three (×3), too dear (red price), locked (padlock), and a status in place of the price. A tap opens the shop drawer with the item's popup.`}),s(!1),(0,J.jsx)(`div`,{className:`ui-lab__controls`,children:(0,J.jsx)(S,{onClick:()=>n(!0),children:`Open the shop drawer`})}),(0,J.jsx)(`div`,{className:`mt-frame max-w-[22rem] rounded-card p-2`,children:(0,J.jsx)(`div`,{className:`mt-sheet flex flex-col rounded-panel`,children:(0,J.jsx)(g,{name:o.name,illustration:(0,J.jsx)(F,{name:o.sprite,size:80}),description:o.description,facts:Ar(o),action:(0,J.jsx)(w,{className:`w-full max-w-64`,label:`Buy`,price:o.price,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:16}),balance:$})})})}),(0,J.jsx)(`div`,{className:`mt-frame max-w-[22rem] rounded-card p-2`,children:(0,J.jsx)(`div`,{className:`mt-sheet flex flex-col rounded-panel`,children:(0,J.jsx)(g,{name:`Cottage`,illustration:(0,J.jsx)(F,{name:`shed`,size:80}),description:`A second storey, two arched windows and a flower box.`,compare:{before:(0,J.jsx)(F,{name:`shed`,size:80}),after:(0,J.jsx)(F,{name:`cottage`,size:80}),beforeLabel:`Now: Garden shed`,afterLabel:`Next: Cottage`},facts:[{id:`tier`,icon:(0,J.jsx)(i,{name:`star`,size:16}),label:`Tier`,value:`2 / 4`}],action:(0,J.jsx)(w,{className:`w-full max-w-64`,label:`Rebuild`,price:12e3,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:16}),balance:$*100,alsoCosts:[{price:400,currencyIcon:(0,J.jsx)(i,{name:`heart`,size:16}),currencyLabel:`hearts`,balance:120}]}),note:`280 more hearts needed`})})}),(0,J.jsx)(`div`,{className:`mt-frame max-w-[22rem] rounded-card p-2`,children:(0,J.jsx)(`div`,{className:`mt-sheet flex flex-col rounded-panel`,children:(0,J.jsx)(g,{name:`Market lane`,illustration:(0,J.jsx)(F,{name:`market-stall`,size:80}),description:`Six columns of packed earth to the east, with a second row of market stalls along the top.`,compare:{before:(0,J.jsx)(Wt,{cap:{col:0,row:0,w:26,h:13},open:{col:0,row:0,w:16,h:9},label:`16 by 9 tiles`}),after:(0,J.jsx)(Wt,{cap:{col:0,row:0,w:26,h:13},open:{col:0,row:0,w:16,h:9},added:[{col:16,row:0,w:6,h:9}],label:`22 by 9 tiles`}),beforeLabel:`Now: 16 × 9`,afterLabel:`Next: 22 × 9`},facts:[{id:`level`,icon:(0,J.jsx)(i,{name:`star`,size:16}),label:`Level`,value:`0 / 3`}],action:(0,J.jsx)(w,{className:`w-full max-w-64`,label:`Expand`,price:2500,currencyIcon:(0,J.jsx)(i,{name:`heart`,size:16}),currencyLabel:`tickets`,balance:3e3,alsoCosts:[{price:6e3,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:16}),currencyLabel:`coins`,balance:$}]})})})}),(0,J.jsxs)(k,{open:t,onOpenChange:e=>{n(e),e||a(null)},title:`Shrine shop`,description:`Tap an item. Its popup opens over the list.`,children:[s(!0),r?(0,J.jsx)(Xt,{open:!0,onClose:()=>a(null),label:r.item.name,from:r.from,children:(0,J.jsx)(g,{name:r.item.name,illustration:(0,J.jsx)(F,{name:r.item.sprite,size:80}),description:r.item.description,facts:Ar(r.item),action:r.item.locked?void 0:(0,J.jsx)(w,{className:`w-full max-w-64`,label:`Buy`,price:r.item.price,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:16}),balance:$,onClick:()=>{a(null),n(!1),e({title:`${r.item.name} bought`,description:`It is in your hand. Pick a spot.`,tone:`reward`})}}),note:r.item.locked?`Opens with the ${r.item.locked}.`:r.item.price>$?`${r.item.price-$} more needed`:void 0})}):null]})]})}function Mr(){let[e,t]=(0,q.useState)(`lantern`),n=Q.find(t=>t.id===e)??null,r=(0,J.jsx)(i,{name:`coin`,size:13});return(0,J.jsxs)(Z,{id:`picker-tray`,eyebrow:`Economy`,children:[(0,J.jsx)(`p`,{className:`m-0 text-sm text-muted-foreground`,children:`A tap on an owned card sets it at once; a tap on a card for sale selects it, and the info panel shows the price on its button.`}),(0,J.jsx)(`div`,{className:`relative overflow-hidden rounded-card bg-surface-sunk pt-24`,children:(0,J.jsx)(Yt,{label:`Picker tray demo`,info:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`strong`,{className:`truncate font-display text-sm font-bold`,children:n?n.name:`Front step`}),(0,J.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:n?`Adds +${n.charm} charm`:`Takes offerings and lanterns`}),n?(0,J.jsx)(w,{gameSize:`sm`,className:`w-full`,label:`Buy and set`,compact:n.id===`bowl`,price:n.price,currencyIcon:(0,J.jsx)(i,{name:`coin`,size:16}),balance:$,alsoCosts:n.id===`bowl`?[{price:40,currencyIcon:(0,J.jsx)(i,{name:`heart`,size:16}),currencyLabel:`hearts`}]:void 0}):null]}),actions:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(S,{gameSize:`sm`,variant:`neutral`,children:`Undo`}),(0,J.jsx)(S,{gameSize:`sm`,variant:`success`,children:`Done`})]}),children:(0,J.jsxs)(Vt,{label:`Features for the front step`,children:[(0,J.jsx)(at,{name:`Seed crate`,illustration:(0,J.jsx)(F,{name:`seed-crate`,size:44}),owned:!0,status:`Here`,badge:(0,J.jsx)(Dt,{icon:(0,J.jsx)(i,{name:`charm`}),value:`+3`})}),(0,J.jsx)(at,{name:`Bonsai pine`,illustration:(0,J.jsx)(F,{name:`bonsai`,size:44}),owned:!0,status:`Owned`,badge:(0,J.jsx)(Dt,{icon:(0,J.jsx)(i,{name:`charm`}),value:`+10`})}),Q.slice(1).map(n=>(0,J.jsx)(at,{name:n.name,illustration:(0,J.jsx)(F,{name:n.sprite,size:44}),badge:(0,J.jsx)(Dt,{icon:(0,J.jsx)(i,{name:`charm`}),value:`+${n.charm}`}),prices:n.locked?void 0:[{amount:n.price,icon:r,short:n.price>$},...n.id===`bowl`?[{amount:40,icon:(0,J.jsx)(i,{name:`heart`,size:13})}]:[]],status:n.locked?`Locked`:void 0,locked:n.locked!==void 0,mark:n.id===`lantern`?(0,J.jsx)(i,{name:`set`,size:18}):void 0,selected:e===n.id,onClick:()=>t(e===n.id?null:n.id)},n.id))]})})})]})}var Nr=48.1*1024*1024,Pr=[`Cats love a warm lantern. Place one near the path at dusk.`,`Water the seed crate every morning for a bigger harvest.`];function Fr(){let[e,t]=(0,q.useState)(0),[n,r]=(0,q.useState)(.42),[i,a]=(0,q.useState)(!1);return(0,q.useEffect)(()=>{if(e===0)return;let t=0,n=0,i=performance.now(),a=i,o=e=>{let s=(e-a)/1e3,c=s<3?s/6*.85:s<4?.425:s<7?Math.min(s-1,6)/6*.85:Math.min(1,.85+(s-7)/1.5*.15);n=Ht(n,c,e-i),i=e,r(n),n<1&&(t=requestAnimationFrame(o))};return t=requestAnimationFrame(o),()=>cancelAnimationFrame(t)},[e]),(0,J.jsxs)(Z,{id:`loading-screen`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{onClick:()=>t(e=>e+1),children:`Play`}),(0,J.jsx)(S,{variant:`secondary`,onClick:()=>a(e=>!e),children:`Retry notice`})]}),(0,J.jsx)(`div`,{className:`ui-lab__loading-frame`,children:(0,J.jsx)(mn,{variant:`inline`,value:n,percent:vt(n),label:`Loading the garden`,art:`library-key-art`,logo:`library-logo`,title:`Nirvana UI`,mascot:dt(`maru`),drift:`fx/maple-leaf`,tips:Pr,status:i?`The connection dropped. Trying again…`:void 0,detail:`${pt(Math.min(1,n/tn)*Nr,`en`)} / ${pt(Nr,`en`)}`})})]})}var Ir=[``,`Hl`,`Shade`,`On`,`Text`];function Lr(){let e=I(),t=e.ui;return(0,J.jsxs)(Z,{id:`derived`,children:[(0,J.jsx)(`p`,{className:`ui-lab__intro`,children:`A theme authors the 14 base colours. Every shade below derives from them, so a new base palette re-colours the whole interface.`}),(0,J.jsx)(`div`,{className:`swatch-grid`,children:Object.entries(e.palette).map(([e,t])=>(0,J.jsxs)(`div`,{className:`swatch`,children:[(0,J.jsx)(`span`,{className:`swatch__color`,style:{backgroundColor:t},"aria-hidden":`true`}),(0,J.jsx)(`strong`,{children:e}),(0,J.jsx)(`code`,{children:t})]},e))}),(0,J.jsx)(`div`,{className:`mt-6 grid gap-3`,children:tt.map(e=>(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,J.jsx)(`strong`,{className:`w-36 font-display text-sm`,children:e}),Ir.map(n=>(0,J.jsxs)(`span`,{className:`grid justify-items-center gap-1`,children:[(0,J.jsx)(`span`,{className:`block h-8 w-14 rounded-pill shadow-[0_0_0_2px_var(--color-sticker)]`,style:{backgroundColor:t[`${e}${n}`]??``},"aria-hidden":`true`}),(0,J.jsx)(`code`,{className:`text-[10px]`,children:n||`face`})]},n)),(0,J.jsx)(`span`,{className:`mt-control ml-2 inline-grid min-h-10 place-items-center rounded-pill px-4 font-display text-sm font-semibold [--mt-size:40px]`,style:{"--face":t[e],"--face-hl":t[`${e}Hl`],"--face-shade":t[`${e}Shade`],"--face-on":t[`${e}On`]},children:`Label`})]},e))})]})}var Rr=[`orb`,`secondary`,`primary`,`positive`,`danger`,`ink`];function zr(){return(0,J.jsxs)(Z,{id:`glyphs`,children:[(0,J.jsx)(`p`,{className:`ui-lab__intro`,children:`White and grey art, multiplied by a theme token. Object icons keep their own colours and are stickers instead.`}),(0,J.jsx)(`div`,{className:`grid gap-4`,children:Rr.map(e=>(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,J.jsx)(`code`,{className:`w-20 text-xs`,children:e}),_e.map(t=>(0,J.jsx)(`span`,{className:`mt-control mt-disc tone-sticker grid size-12 place-items-center rounded-full [&_[data-slot=game-sticker]]:[--sprite-edge:30px]`,title:t,children:(0,J.jsx)(B,{name:t,tone:e})},t))]},e))})]})}function Br(){return(0,J.jsx)(Z,{id:`play`,children:(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-10 p-4`,children:[(0,J.jsx)(p,{label:`Play level 1`,value:1}),(0,J.jsx)(p,{label:`Play level 12`,value:12,tone:`secondary`}),(0,J.jsx)(p,{label:`Play level 3`,value:3,tone:`positive`}),(0,J.jsx)(p,{label:`Retry`,value:9,tone:`danger`}),(0,J.jsx)(p,{label:`Play, locked`,value:4,disabled:!0})]})})}var Vr=[[`mt-currency`,[`pencil`,`can`,`ticket`,`paw-stamp`]],[`mt-shouts`,[`starburst-red`,`starburst-yellow`,`tag-red`,`tag-green`]],[`mt-mascots`,[`cat-sleep`,`cat-cheer`,`cat-point`,`cat-think`]],[`mt-reward-fx`,[`rays`,`medal`,`gift-closed`,`gift-open`]]],Hr=[[`mt-caps`,[`play-triangle`,`level-house`,`hex`,`starburst`]],[`mt-ribbons`,[`tail-left`,`tail-right`,`tab-ears`]]];function Ur(){return(0,J.jsx)(Z,{id:`uiart`,children:(0,J.jsxs)(`div`,{className:`grid gap-5`,children:[Vr.map(([e,t])=>(0,J.jsxs)(`div`,{className:`flex flex-wrap items-end gap-5`,children:[(0,J.jsx)(`code`,{className:`w-28 text-xs`,children:e}),t.map(t=>(0,J.jsxs)(`span`,{className:`grid justify-items-center gap-1`,children:[(0,J.jsx)(F,{name:`${e}/${t}`,size:64}),(0,J.jsx)(`code`,{className:`text-[10px]`,children:t})]},t))]},e)),Hr.map(([e,t])=>(0,J.jsxs)(`div`,{className:`flex flex-wrap items-end gap-5`,children:[(0,J.jsxs)(`code`,{className:`w-28 text-xs`,children:[e,` (tinted)`]}),t.map((t,n)=>(0,J.jsxs)(`span`,{className:`grid justify-items-center gap-1`,children:[(0,J.jsx)(`span`,{className:`mt-cap-rim`,children:(0,J.jsx)(F,{name:`${e}/${t}`,size:64,tint:[`var(--color-primary)`,`var(--color-secondary)`,`var(--color-frame)`,`var(--color-danger)`][n%4]})}),(0,J.jsx)(`code`,{className:`text-[10px]`,children:t})]},t))]},e))]})})}var Wr=/^ui-stats-[2-5]\//,Gr=_t.filter(e=>!Wr.test($t[e].frame)),Kr=Kt.filter(e=>e.startsWith(`sticker-`)),qr=Kt.filter(e=>!e.startsWith(`sticker-`)),Jr=[`appBackground`,`surface`,`primary`,`secondary`,`accent`];function Yr(){let e=I(),t=Ft(e=>e.settings.theme),n=Ft(e=>e.setSettings);return(0,J.jsx)(Xr,{themeName:e.name,children:(0,J.jsxs)(`div`,{className:`ui-lab__sections`,children:[(0,J.jsxs)(Z,{id:`themes`,eyebrow:`Pick one`,aside:(0,J.jsx)(K,{gameSize:`sm`,variant:`yellow`,children:e.name}),children:[(0,J.jsx)(`p`,{className:`theme-card-intro`,children:`Every control below repaints when you pick a theme. The choice is saved with the player's settings and follows them into the game.`}),(0,J.jsx)(`div`,{className:`theme-card-grid`,role:`radiogroup`,"aria-label":`Theme`,children:wt.map(e=>{let r=xt(e),i=e===t;return(0,J.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":i,className:`theme-card`,"data-selected":i||void 0,onClick:()=>n({theme:e}),style:{backgroundColor:r.colors.surface,color:r.colors.text,fontFamily:r.typography.display},children:[(0,J.jsx)(`span`,{className:`theme-card__strip`,"aria-hidden":`true`,children:Jr.map(e=>(0,J.jsx)(`span`,{style:{backgroundColor:r.colors[e]}},e))}),(0,J.jsx)(`span`,{className:`theme-card__name`,children:r.name}),(0,J.jsx)(`span`,{className:`theme-card__tagline`,style:{color:r.colors.textMuted},children:r.tagline}),(0,J.jsx)(`span`,{className:`theme-card__cta`,style:{backgroundColor:i?r.colors.primary:r.colors.mutedControl,color:i?r.colors.primaryForeground:r.colors.text},children:i?`Current theme`:`Use this theme`})]},e)})})]}),(0,J.jsx)(Z,{id:`palette`,children:(0,J.jsx)(`div`,{className:`swatch-grid`,children:Object.entries(e.colors).map(([e,t])=>(0,J.jsxs)(`div`,{className:`swatch`,children:[(0,J.jsx)(`span`,{className:`swatch__color`,style:{backgroundColor:t},"aria-hidden":`true`}),(0,J.jsx)(`strong`,{children:e}),(0,J.jsx)(`code`,{children:t})]},e))})}),(0,J.jsx)(Lr,{}),(0,J.jsx)(zr,{}),(0,J.jsx)(Ur,{}),(0,J.jsxs)(Z,{id:`typography`,children:[(0,J.jsx)(`div`,{className:`type-sample type-sample--display`,children:`A warm little corner.`}),(0,J.jsx)(`div`,{className:`type-sample type-sample--body`,children:`Rounded body text stays readable across inventory labels, dialog choices, journal entries, and tiny screens.`}),(0,J.jsx)(`div`,{className:`type-sample type-sample--numeric`,children:`12,480 · Level 24`})]}),(0,J.jsx)(Z,{id:`stickers`,children:(0,J.jsxs)(`div`,{className:`ui-lab__icon-row`,children:[Gr.map((e,t)=>(0,J.jsxs)(`div`,{className:`inline-grid justify-items-center gap-1.5`,children:[(0,J.jsx)(`span`,{className:L(`mt-control mt-disc grid size-14 place-items-center rounded-full [--mt-size:56px]`,t%4==1?`tone-secondary`:`tone-sticker`),children:(0,J.jsx)(i,{name:e,size:26})}),(0,J.jsx)(`span`,{className:`font-display text-xs font-bold`,children:e})]},e)),Kr.map((e,t)=>(0,J.jsxs)(`div`,{className:`inline-grid justify-items-center gap-1.5`,children:[(0,J.jsx)(`span`,{className:L(`mt-control mt-disc grid size-14 place-items-center rounded-full [--mt-size:56px]`,(Gr.length+t)%4==1?`tone-secondary`:`tone-sticker`),children:(0,J.jsx)(F,{name:e,size:26,sticker:!0})}),(0,J.jsx)(`span`,{className:`font-display text-xs font-bold`,children:e})]},e))]})}),(0,J.jsxs)(Z,{id:`sprites`,children:[(0,J.jsx)(`div`,{className:`ui-lab__icon-row`,children:qr.map(e=>(0,J.jsxs)(`div`,{className:`inline-grid justify-items-center gap-1.5`,children:[(0,J.jsx)(`span`,{className:`grid size-14 place-items-center`,children:(0,J.jsx)(F,{name:e,size:32})}),(0,J.jsx)(`span`,{className:`font-display text-xs font-bold`,children:e})]},e))}),(0,J.jsxs)(`div`,{className:`ui-lab__icon-row`,children:[[`chicken`,`sunflower`,`mushroom`].map(e=>(0,J.jsxs)(`div`,{className:`inline-grid justify-items-center gap-1.5`,children:[(0,J.jsx)(`span`,{className:`grid size-14 place-items-center`,children:(0,J.jsx)(F,{name:e,size:32})}),(0,J.jsx)(`span`,{className:`font-display text-xs font-bold`,children:`plain`})]},e)),[`chicken`,`sunflower`,`mushroom`].map(e=>(0,J.jsxs)(`div`,{className:`inline-grid justify-items-center gap-1.5`,children:[(0,J.jsx)(`span`,{className:`grid size-14 place-items-center`,children:(0,J.jsx)(F,{name:e,size:32,sticker:!0})}),(0,J.jsx)(`span`,{className:`font-display text-xs font-bold`,children:`sticker`})]},`${e}-sticker`))]})]}),(0,J.jsx)(Jn,{}),(0,J.jsx)(Yn,{}),(0,J.jsx)(Xn,{}),(0,J.jsx)(Qn,{}),(0,J.jsx)(wr,{}),(0,J.jsxs)(Z,{id:`buttons`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{children:`Primary`}),(0,J.jsx)(S,{variant:`secondary`,children:`Secondary`}),(0,J.jsx)(S,{variant:`peach`,children:`Peach`}),(0,J.jsx)(S,{variant:`sage`,children:`Sage`}),(0,J.jsx)(S,{variant:`neutral`,children:`Neutral`}),(0,J.jsx)(S,{variant:`destructive`,children:`Destructive`}),(0,J.jsx)(S,{variant:`ghost`,children:`Ghost`})]}),(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{loading:!0,children:`Planting`}),(0,J.jsx)(S,{disabled:!0,children:`Not yet`}),(0,J.jsx)(S,{variant:`secondary`,disabled:!0,children:`Locked`})]}),(0,J.jsxs)(`div`,{className:`ui-lab__icon-row`,children:[(0,J.jsx)(E,{icon:(0,J.jsx)(i,{name:`bell`}),label:`Notices`,notification:3,notificationLabel:`3 new notices`}),(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`bag`}),label:`Bag`,notification:`!`,notificationLabel:`Backpack needs attention`}),(0,J.jsx)(Ue,{content:`Settings are also labeled in the main menu.`,children:(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`settings`}),label:`Settings`})})]})]}),(0,J.jsx)(Br,{}),(0,J.jsx)(Hn,{}),(0,J.jsx)(Un,{}),(0,J.jsx)(ei,{}),(0,J.jsx)(ti,{}),(0,J.jsx)(ni,{}),(0,J.jsx)(hr,{}),(0,J.jsx)(br,{}),(0,J.jsx)(ii,{}),(0,J.jsx)(ai,{}),(0,J.jsx)(er,{}),(0,J.jsx)(tr,{}),(0,J.jsx)(nr,{}),(0,J.jsx)(Z,{id:`panels`,children:(0,J.jsxs)(`div`,{className:`ui-lab__panel-grid`,children:[(0,J.jsxs)(V,{titleTab:`Today’s note`,illustration:(0,J.jsx)(F,{name:`kale`,size:54}),children:[(0,J.jsx)(Qe,{children:(0,J.jsx)(`strong`,{children:`Warm cream panel`})}),(0,J.jsx)(_,{children:`Useful for feature summaries and friendly decisions.`})]}),(0,J.jsx)(V,{variant:`group`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Yellow reward panel`}),(0,J.jsx)(`p`,{children:`Use strong pastels selectively for moments of progress.`})]})}),(0,J.jsx)(V,{variant:`quiet`,compact:!0,children:(0,J.jsxs)(_,{children:[(0,J.jsx)(`strong`,{children:`Quiet journal panel`}),(0,J.jsx)(`p`,{children:`Not every surface needs a decorative title or illustration.`})]})})]})}),(0,J.jsx)(si,{}),(0,J.jsx)(Z,{id:`empty`,children:(0,J.jsx)(ye,{title:`The basket is waiting`,description:`Collect a garden keepsake and it will appear here.`,action:{label:`Visit the garden`,onClick:()=>void 0}})}),(0,J.jsx)(oi,{}),(0,J.jsx)(Z,{id:`accordion`,children:(0,J.jsx)(Pe,{defaultValue:`sounds`,items:[{value:`sounds`,title:`Sound and haptics`,icon:(0,J.jsx)(i,{name:`music`}),content:`Chimes, taps, and gentle buzzes.`},{value:`account`,title:`Your garden`,icon:(0,J.jsx)(i,{name:`home`}),content:`Saved on this device. Nothing leaves it.`},{value:`help`,title:`Help`,icon:(0,J.jsx)(F,{name:`gem-blue`}),content:`Match every pair to finish a chapter.`}]})}),(0,J.jsx)(Z,{id:`scroll`,children:(0,J.jsx)(ln,{children:(0,J.jsx)(`div`,{className:`flex min-w-max gap-2 py-1`,children:Gr.slice(0,16).map(e=>(0,J.jsx)(`span`,{className:`grid size-14 shrink-0 place-items-center`,children:(0,J.jsx)(i,{name:e,size:24})},e))})})}),(0,J.jsx)(Z,{id:`spinner`,children:(0,J.jsxs)(`div`,{className:`ui-lab__status`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-around gap-3`,children:[(0,J.jsx)(h,{size:`sm`,label:null}),(0,J.jsx)(h,{}),(0,J.jsx)(h,{size:`lg`,label:`Growing…`})]}),(0,J.jsxs)(`div`,{className:`relative grid h-40 justify-items-center rounded-panel edge-chrome bg-game-surface p-4`,children:[(0,J.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Content underneath`}),(0,J.jsx)(h,{overlay:!0,label:`Loading the board…`})]})]})}),(0,J.jsx)(rr,{}),(0,J.jsx)(ar,{}),(0,J.jsx)(or,{}),(0,J.jsx)(sr,{}),(0,J.jsx)(Sr,{}),(0,J.jsx)(Dr,{}),(0,J.jsxs)(Z,{id:`hud`,children:[(0,J.jsxs)(`div`,{className:`grid gap-(--ui-gap-section)`,children:[(0,J.jsx)(de,{resources:[{value:53,display:`53%`,icon:(0,J.jsx)(F,{name:`critter-tabi`}),label:`satisfaction`},{value:74,display:`$74`,icon:(0,J.jsx)(i,{name:`coin`}),label:`money`,variant:`coins`},{value:15,icon:(0,J.jsx)(F,{name:`chicken`}),label:`villagers`},{value:8,icon:(0,J.jsx)(F,{name:`sunflower`}),label:`flowers`}],secondary:[{value:12,icon:(0,J.jsx)(F,{name:`radish`}),label:`berries`},{value:3,icon:(0,J.jsx)(F,{name:`kale`}),label:`leaves`},{value:0,icon:(0,J.jsx)(i,{name:`star`}),label:`stars`}]}),(0,J.jsx)(de,{layout:`inline`,resources:[{value:1240,icon:(0,J.jsx)(i,{name:`coin`}),label:`coins`,variant:`coins`},{value:8,icon:(0,J.jsx)(i,{name:`energy`}),label:`energy`,variant:`energy`}],actions:(0,J.jsx)(D,{icon:(0,J.jsx)(i,{name:`settings`}),"aria-label":`Open settings`})})]}),(0,J.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 rounded-card bg-game-sage/45 p-4`,children:[(0,J.jsx)(v,{surface:`glass`,value:128,icon:(0,J.jsx)(i,{name:`coin`,size:18}),label:`coins`}),(0,J.jsx)(v,{surface:`glass`,value:6,icon:(0,J.jsx)(i,{name:`heart`,size:18}),label:`hearts`}),(0,J.jsx)(v,{surface:`glass`,muted:!0,value:3,icon:(0,J.jsx)(F,{name:`chicken`,size:24}),label:`visitors`})]}),(0,J.jsxs)(`div`,{className:`ui-lab__status`,children:[(0,J.jsx)(u,{value:68,icon:(0,J.jsx)(i,{name:`star`}),label:`Experience`,showValue:!0,variant:`experience`}),(0,J.jsx)(u,{value:42,icon:(0,J.jsx)(i,{name:`heart`}),label:`Friendship`,showValue:!0,variant:`friendship`}),(0,J.jsx)(u,{value:84,icon:(0,J.jsx)(F,{name:`kale`}),label:`Collection`,showValue:!0,variant:`completion`})]})]}),(0,J.jsx)(Or,{}),(0,J.jsx)(ci,{}),(0,J.jsxs)(Z,{id:`lives`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(N,{current:3,max:5,refillSeconds:754}),(0,J.jsx)(N,{current:5,max:5}),(0,J.jsx)(N,{current:2,max:3,refills:!1,label:`hearts`}),(0,J.jsx)(we,{elapsedSeconds:221}),(0,J.jsx)(v,{value:3,total:8,icon:(0,J.jsx)(B,{name:`paw`,size:30}),label:`cats placed`}),(0,J.jsx)(v,{surface:`chip`,value:3,total:8,icon:(0,J.jsx)(B,{name:`paw`}),label:`cats placed`})]}),(0,J.jsx)(ri,{})]}),(0,J.jsxs)(Z,{id:`minigame`,children:[(0,J.jsx)(`div`,{className:`relative h-20 w-full max-w-[568px] rounded-card bg-game-sage`,children:(0,J.jsx)(ke,{score:12,scoreLabel:`Score`,scoreIcon:(0,J.jsx)(B,{name:`paw`,size:30}),remainingSeconds:27,timerLabel:`Time left`,meter:{value:.35,label:`Paper`},onStop:()=>void 0,stopLabel:`Stop the game`})}),(0,J.jsx)(`div`,{className:`relative h-20 w-full max-w-[568px] rounded-card bg-game-sage`,children:(0,J.jsx)(ke,{score:7,scoreLabel:`Score`,scoreIcon:(0,J.jsx)(B,{name:`paw`,size:30}),remainingSeconds:48,timerLabel:`Time left`,left:{value:5,label:`Rings`,icon:(0,J.jsx)(B,{name:`paw`,size:22})},onStop:()=>void 0,stopLabel:`Stop the game`})})]}),(0,J.jsx)(Wn,{}),(0,J.jsx)(Z,{id:`speech`,children:(0,J.jsxs)(`div`,{className:`ui-lab__status`,children:[(0,J.jsxs)(ce,{speaker:`Sleepy snail`,avatar:(0,J.jsx)(F,{name:`critter-tabi`,size:44}),children:[`Another quiet morning. The`,` `,(0,J.jsx)(he,{children:`berries`}),` kept their promise.`]}),(0,J.jsxs)(ce,{tone:`yellow`,avatar:(0,J.jsx)(F,{name:`critter-tabi`,size:44}),speaker:`Hazel`,action:(0,J.jsx)(S,{gameSize:`sm`,variant:`neutral`,children:`Reply`}),children:[`I found `,(0,J.jsx)(he,{children:`three acorns`}),` and I am keeping all of them!`]})]})}),(0,J.jsx)(Z,{id:`mail`,children:(0,J.jsx)(l,{from:`Auntie Mole`,avatar:(0,J.jsx)(F,{name:`critter-tabi`,size:40}),date:`This morning`,unread:!0,stamp:(0,J.jsx)(F,{name:`sunflower`}),attachment:{label:`3 acorns`,icon:(0,J.jsx)(F,{name:`mushroom`})},onClaim:()=>void 0,children:`The rain washed some new seeds onto the path by the pond. I saved you a few of the round ones — plant them somewhere sunny, dear.`})}),(0,J.jsx)(Z,{id:`dialogue`,children:(0,J.jsx)(hn,{speaker:`Auntie Mole`,portrait:(0,J.jsx)(F,{name:`critter-tabi`}),text:`The rain washed new seeds onto the path. Plant them somewhere sunny, dear.`,onAdvance:()=>void 0})}),(0,J.jsx)(li,{}),(0,J.jsx)(ui,{}),(0,J.jsx)(Z,{id:`level`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(De,{level:24,value:68}),(0,J.jsx)(De,{level:7,value:30,size:56}),(0,J.jsx)(W,{value:2,animate:!0}),(0,J.jsx)(W,{value:3,size:26})]})}),(0,J.jsx)(di,{}),(0,J.jsx)(Z,{id:`milestones`,children:(0,J.jsx)(ae,{onClaim:()=>void 0,nodes:[{id:`a`,label:`Sprout`,reward:(0,J.jsx)(F,{name:`kale`}),state:`claimed`},{id:`b`,label:`Bloom`,reward:(0,J.jsx)(F,{name:`sunflower`}),state:`claimed`},{id:`c`,label:`Harvest`,reward:(0,J.jsx)(i,{name:`basket`}),state:`next`},{id:`d`,label:`Feast`,reward:(0,J.jsx)(F,{name:`potato`}),state:`locked`},{id:`e`,label:`Crown`,reward:(0,J.jsx)(i,{name:`trophy`}),state:`locked`}]})}),(0,J.jsx)(Z,{id:`achievements`,children:(0,J.jsxs)(Je,{"aria-label":`Keepsakes`,children:[(0,J.jsx)(T,{name:`Morning gardener`,icon:(0,J.jsx)(i,{name:`star`}),earnedOn:`12 Jun`}),(0,J.jsx)(T,{name:`Berry picker`,icon:(0,J.jsx)(F,{name:`radish`}),earnedOn:`3 Jul`}),(0,J.jsx)(T,{name:`Night owl`,hint:`Play after dusk`}),(0,J.jsx)(T,{name:`Collector`,hint:`Fill the journal`})]})}),(0,J.jsx)(fi,{}),(0,J.jsx)(cr,{}),(0,J.jsx)(lr,{}),(0,J.jsx)(ur,{}),(0,J.jsx)(mr,{}),(0,J.jsx)(xr,{}),(0,J.jsx)(pi,{}),(0,J.jsx)(mi,{}),(0,J.jsx)(hi,{}),(0,J.jsx)(gi,{}),(0,J.jsx)(Gn,{}),(0,J.jsx)(jr,{}),(0,J.jsx)(Mr,{}),(0,J.jsx)(_i,{}),(0,J.jsx)(gr,{}),(0,J.jsx)(_r,{}),(0,J.jsx)(vr,{}),(0,J.jsx)(Kn,{}),(0,J.jsx)(fr,{})]})})}function Xr({themeName:e,children:t}){let n=it(),r=Tn(n)?n:null,[a,o]=(0,q.useState)(``),s=(0,q.useRef)(null);return(0,q.useEffect)(()=>{s.current?.closest(`.screen-shell`)?.scrollTo({top:0})},[r]),Zt?(0,J.jsx)(jn,{value:r,children:(0,J.jsxs)(gn,{className:`ui-lab ui-lab--frame`,children:[(0,J.jsx)(`div`,{className:`ui-lab__frame-bar`,children:(0,J.jsx)($r,{})}),t]})}):(0,J.jsx)(jn,{value:r,children:(0,J.jsxs)(gn,{className:`ui-lab`,children:[(0,J.jsxs)(`header`,{className:`ui-lab__topbar`,ref:s,children:[(0,J.jsxs)(`a`,{className:`ui-lab__brand`,href:`?ui-lab`,onClick:e=>{e.preventDefault(),Rt(null)},children:[(0,J.jsx)(F,{name:`library-logo`,size:36}),(0,J.jsx)(`span`,{children:`Nirvana UI`})]}),(0,J.jsx)(Nn,{query:a}),(0,J.jsx)(Ce,{className:`ui-lab__search`,label:`Search components`,placeholder:`Search components`,value:a,onValueChange:o}),(0,J.jsxs)(`span`,{className:`ui-lab__topbar-end`,children:[null,Jt()?(0,J.jsxs)(S,{variant:`ghost`,gameSize:`sm`,onClick:()=>Gt(!1),children:[(0,J.jsx)(i,{name:`arrow-left`}),`Back to game`]}):null,(0,J.jsx)($r,{})]})]}),(0,J.jsxs)(`div`,{className:`ui-lab__layout`,children:[(0,J.jsx)(`aside`,{className:`ui-lab__sidebar`,children:(0,J.jsx)(Mn,{query:a})}),(0,J.jsxs)(`div`,{className:`ui-lab__main`,children:[r===null?(0,J.jsx)(Pn,{query:a,themeName:e}):null,t]})]})]})})}var Zr=`ui-lab:award-coins`;function Qr(e){window.dispatchEvent(new CustomEvent(Zr,{detail:e}))}function $r(){let[e,t]=(0,q.useState)(1240);return(0,q.useEffect)(()=>{let e=e=>t(t=>t+(e.detail??0));return window.addEventListener(Zr,e),()=>window.removeEventListener(Zr,e)},[]),(0,J.jsx)(`span`,{id:`lab-coin-target`,children:(0,J.jsx)(v,{value:e,icon:(0,J.jsx)(i,{name:`coin`}),label:`coins`,variant:`coins`})})}function ei(){let[e,t]=(0,q.useState)(!0),[n,r]=(0,q.useState)(!1),[a,o]=(0,q.useState)(60);return(0,J.jsx)(Z,{id:`settings`,children:(0,J.jsxs)(`div`,{className:`ui-lab__status`,children:[(0,J.jsx)(Ke,{label:`Garden sounds`,description:`Soft chimes for taps and matches.`,icon:(0,J.jsx)(i,{name:`bell`,size:22}),checked:e,onCheckedChange:t}),(0,J.jsx)(Ke,{label:`Haptics`,icon:(0,J.jsx)(i,{name:`vibrate`,size:22}),checked:n,onCheckedChange:r}),(0,J.jsx)(ve,{label:`Music volume`,icon:(0,J.jsx)(i,{name:`music`,size:22}),value:a,onValueChange:o,formatValue:e=>`${e}%`}),(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(we,{label:`Soup`,remainingSeconds:154}),(0,J.jsx)(we,{label:`Harvest`,remainingSeconds:0})]})]})})}function ti(){let[e,t]=(0,q.useState)(!0),[n,i]=(0,q.useState)(`gentle`);return(0,J.jsx)(Z,{id:`choices`,children:(0,J.jsxs)(`div`,{className:`ui-lab__status`,children:[(0,J.jsx)(r,{label:`Daily garden note`,description:`A gentle reminder when something is ready.`,checked:e,onCheckedChange:e=>t(e===!0)}),(0,J.jsx)(Bt,{label:`Difficulty`,value:n,onValueChange:i,options:[{value:`gentle`,label:`Gentle`,description:`No timers, no losing.`},{value:`tending`,label:`Tending`,description:`Light limits on moves.`}]})]})})}function ni(){let[e,t]=(0,q.useState)(3);return(0,J.jsx)(Z,{id:`stepper`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(f,{label:`seed packets`,value:e,onValueChange:t,min:1,max:12}),(0,J.jsx)(Be,{price:e*40})]})})}function ri(){let[e,t]=(0,q.useState)(3),[n,r]=(0,q.useState)(3),[a,o]=(0,q.useState)(0),s=c(a);return(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(N,{current:e,max:3,refills:!1,label:`hearts`}),(0,J.jsx)(S,{variant:`neutral`,gameSize:`sm`,onClick:()=>t(e=>e>0?e-1:3),children:e>0?`Lose a heart`:`Refill`}),(0,J.jsx)(P,{icon:(0,J.jsx)(i,{name:`sparkle`}),label:`Hint, ${n} left`,count:n,onClick:()=>r(e=>e>0?e-1:3)}),(0,J.jsx)(S,{variant:`neutral`,gameSize:`sm`,onClick:()=>o(e=>e+1),children:`Drop and shine`}),(0,J.jsxs)(`span`,{className:`relative grid size-16 place-items-center overflow-hidden`,children:[(0,J.jsx)(`span`,{className:`game-drop-in`,children:(0,J.jsx)(i,{name:`heart`,size:36})},a),s>0?(0,J.jsx)(`span`,{className:`game-shine`,"aria-hidden":`true`},s):null]})]})}function ii(){let[e,t]=(0,q.useState)(`all`);return(0,J.jsxs)(Z,{id:`segmented`,children:[(0,J.jsx)(H,{label:`Collection filter`,value:e,onValueChange:t,options:[{value:`all`,label:`All`},{value:`owned`,label:`Owned`},{value:`new`,label:`New`}]}),(0,J.jsx)(H,{label:`Collection filter, stretched`,stretch:!0,value:e,onValueChange:t,options:[{value:`all`,label:`All`},{value:`owned`,label:`Owned`},{value:`new`,label:`New`}]}),(0,J.jsx)(H,{label:`Shop pages, five options`,stretch:!0,value:e,onValueChange:t,options:[{value:`all`,label:`Features`},{value:`owned`,label:`Upgrades`},{value:`new`,label:`Sets`},{value:`staff`,label:`Staff`},{value:`gems`,label:`Gems`}]})]})}function ai(){let[e,t]=(0,q.useState)(!0),[n,r]=(0,q.useState)(!1);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Z,{id:`settings-rows`,children:(0,J.jsxs)(Le,{children:[(0,J.jsx)(re,{label:`Garden sounds`,description:`Soft chimes for taps and matches.`,icon:(0,J.jsx)(i,{name:`speaker`}),control:(0,J.jsx)(Ke,{label:`Garden sounds`,checked:e,onCheckedChange:t,hideLabel:!0})}),(0,J.jsx)(re,{label:`Journal`,description:`Read every note you have kept.`,icon:(0,J.jsx)(i,{name:`letter`}),onClick:()=>void 0}),(0,J.jsx)(re,{label:`Reset garden`,description:`Start the whole thing over.`,icon:(0,J.jsx)(i,{name:`caution`}),onClick:()=>r(!0)})]})}),(0,J.jsx)(Se,{open:n,onOpenChange:r,title:`Start over?`,description:`This clears every bed, keepsake, and journal note. It cannot be undone.`,illustration:(0,J.jsx)(i,{name:`caution`}),confirmLabel:`Reset everything`,cancelLabel:`Keep my garden`,destructive:!0,onConfirm:()=>void 0})]})}function oi(){let[e,t]=(0,q.useState)(!1);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Z,{id:`confirm`,children:(0,J.jsx)(`div`,{className:`ui-lab__controls`,children:(0,J.jsx)(S,{variant:`destructive`,onClick:()=>t(!0),children:`Reset garden`})})}),(0,J.jsx)(Se,{open:e,onOpenChange:t,title:`Start over?`,description:`This clears every bed, keepsake, and journal note. It cannot be undone.`,illustration:(0,J.jsx)(i,{name:`caution`}),confirmLabel:`Reset everything`,cancelLabel:`Keep my garden`,destructive:!0,onConfirm:()=>void 0})]})}function si(){let[e,t]=(0,q.useState)(!1),[n,r]=(0,q.useState)(`sheet`),[a,o]=(0,q.useState)(!1),[s,c]=(0,q.useState)(``);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{id:`overlays`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{onClick:()=>t(!0),children:`Open dialog`}),(0,J.jsx)(S,{variant:`secondary`,onClick:()=>o(!0),children:`Open inventory drawer`})]}),(0,J.jsx)(H,{label:`Dialog placement`,value:n,onValueChange:e=>r(e),options:[{value:`sheet`,label:`Bottom sheet`},{value:`center`,label:`Centred`}]})]}),(0,J.jsxs)(mt,{open:e,onOpenChange:t,placement:n,title:`A small decision`,description:`The rain has started. Bring the seed trays inside?`,illustration:(0,J.jsx)(F,{name:`plot-watered`,size:64}),children:[(0,J.jsx)(S,{fullWidth:!0,onClick:()=>t(!1),children:`Bring them in`}),(0,J.jsx)(S,{fullWidth:!0,variant:`neutral`,onClick:()=>t(!1),children:`Leave them covered`})]}),(0,J.jsx)(k,{open:a,onOpenChange:o,title:`Garden backpack`,description:`A mobile-friendly inventory and detail surface.`,illustration:(0,J.jsx)(i,{name:`bag`,size:38}),footer:(0,J.jsx)(S,{fullWidth:!0,onClick:()=>o(!1),children:`Done`}),children:(0,J.jsxs)(`div`,{className:`grid gap-4`,children:[(0,J.jsx)(Ce,{value:s,onValueChange:c,label:`Search the backpack`,placeholder:`Search the backpack…`}),(0,J.jsx)(ye,{title:`One pocket is empty`,description:`There is room for one more useful garden tool.`})]})})]})}function ci(){let[e,t]=(0,q.useState)(`home`);return(0,J.jsx)(Z,{id:`nav`,children:(0,J.jsx)(He,{value:e,onValueChange:t,items:[{value:`home`,label:`Home`,icon:(0,J.jsx)(i,{name:`home`})},{value:`journal`,label:`Journal`,icon:(0,J.jsx)(i,{name:`letter`})},{value:`shop`,label:`Shop`,icon:(0,J.jsx)(i,{name:`basket`}),notification:2},{value:`bag`,label:`Bag`,icon:(0,J.jsx)(i,{name:`bag`,size:22})}]})})}function li(){let[e,t]=(0,q.useState)(!1),n=(0,q.useRef)(null);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{id:`coaching`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{ref:n,variant:`sage`,children:`Water the beds`}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>t(!0),children:`Point at it`})]}),(0,J.jsx)(`div`,{className:`ui-lab__status`,children:(0,J.jsx)(ue,{pulse:!0,children:`Try matching the two berries first.`})})]}),(0,J.jsx)(me,{open:e,target:n.current,stepLabel:`Step 1 of 3`,title:`Water the beds`,description:`Tap here each morning to keep the garden growing.`,onDismiss:()=>t(!1)})]})}function ui(){let[e,t]=(0,q.useState)(`blueberry`);return(0,J.jsx)(Z,{id:`collectibles`,children:(0,J.jsxs)(a,{"aria-label":`Garden collectibles`,children:[(0,J.jsx)(C,{name:`Blueberry basket`,illustration:(0,J.jsx)(F,{name:`radish`,size:48}),rarity:`Seasonal`,selected:e===`blueberry`,onClick:()=>t(`blueberry`)}),(0,J.jsx)(C,{name:`Mushroom lantern`,illustration:(0,J.jsx)(F,{name:`mushroom`,size:48}),notification:`dot`,selected:e===`mushroom`,onClick:()=>t(`mushroom`)}),(0,J.jsx)(C,{name:`Pond friend`,state:`locked`}),(0,J.jsx)(C,{name:`Unknown recipe`,state:`undiscovered`})]})})}function di(){let[e,t]=(0,q.useState)(!1);return(0,J.jsx)(Z,{id:`daily`,children:(0,J.jsx)(et,{days:[{day:1,reward:(0,J.jsx)(i,{name:`coin`,size:30}),label:`20 coins`,state:`claimed`},{day:2,reward:(0,J.jsx)(F,{name:`radish`,size:30}),label:`berries`,state:`claimed`},{day:3,reward:(0,J.jsx)(i,{name:`star`,size:30}),label:`a star`,state:e?`claimed`:`today`},{day:4,reward:(0,J.jsx)(i,{name:`gift`,size:30}),label:`a gift`,state:`upcoming`},{day:5,reward:(0,J.jsx)(i,{name:`heart`,size:30}),label:`friendship`,state:`upcoming`}],onClaim:()=>t(!0)})})}function fi(){let[e,t]=(0,q.useState)(!1);return(0,J.jsx)(Z,{id:`unlock`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(ut,{unlocked:e,name:`Moon pond`,description:`A quiet pool for evening visitors.`,illustration:(0,J.jsx)(i,{name:`sparkle`}),actionLabel:`Place it`,onAction:()=>void 0}),(0,J.jsx)(S,{variant:`neutral`,gameSize:`sm`,onClick:()=>t(e=>!e),children:e?`Lock again`:`Unlock`})]})})}function pi(){let[e,t]=(0,q.useState)(!1);return(0,J.jsx)(Z,{id:`quests`,children:(0,J.jsxs)(Ne,{"aria-label":`Daily quests`,children:[(0,J.jsx)(G,{title:`Water the flowerbeds`,icon:(0,J.jsx)(F,{name:`sunflower`}),progress:{current:2,total:3},reward:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i,{name:`coin`}),` 15`]})}),(0,J.jsx)(G,{title:`Match one garden puzzle`,icon:(0,J.jsx)(F,{name:`kale`}),progress:{current:1,total:1},state:e?`claimed`:`claimable`,onClaim:()=>t(!0)}),(0,J.jsx)(G,{title:`Greet the sleepy snail`,icon:(0,J.jsx)(F,{name:`critter-tabi`,size:22}),progress:{current:1,total:1},state:`claimed`}),(0,J.jsx)(G,{title:`Welcoming paws`,hint:`Visits finished. Tier 2 of 5.`,icon:(0,J.jsx)(i,{name:`medal-silver`}),progress:{current:212,total:600},reward:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i,{name:`coin`}),` 1,600`]})})]})})}function mi(){let[e,t]=(0,q.useState)(!1);return(0,J.jsx)(Z,{id:`gacha`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(fe,{revealed:e,onReveal:()=>t(!0),name:`Moss lantern`,illustration:(0,J.jsx)(F,{name:`mushroom`,size:56}),rarity:`Rare`}),(0,J.jsx)(S,{variant:`ghost`,gameSize:`sm`,onClick:()=>t(!1),children:`Reset card`})]})})}function hi(){let[e,t]=(0,q.useState)(!1),n=gt();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Z,{id:`celebration`,children:(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{onClick:()=>t(!0),children:`Open celebration`}),(0,J.jsx)(S,{variant:`secondary`,onClick:e=>{let t=document.getElementById(`lab-coin-target`);t&&n({from:e.currentTarget,to:t,count:6,onArrive:()=>Qr(5)})},children:`Collect 30 coins`})]})}),(0,J.jsx)(be,{open:e,onOpenChange:t,title:`Harvest complete!`,description:`The garden thanks you for a gentle afternoon.`,reward:(0,J.jsxs)(J.Fragment,{children:[`+25 `,(0,J.jsx)(i,{name:`coin`})]}),illustration:(0,J.jsx)(i,{name:`basket`,size:64})})]})}function gi(){let[e,t]=(0,q.useState)(`idle`),[n,r]=(0,q.useState)(1240);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{id:`motion`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(S,{onClick:()=>{t(`covering`),window.setTimeout(()=>t(`revealing`),260),window.setTimeout(()=>t(`idle`),600)},children:`Play leaf-wipe`}),(0,J.jsx)(S,{variant:`secondary`,onClick:()=>r(e=>e+120),children:`Award 120 coins`}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>r(1240),children:`Reset counter`})]}),(0,J.jsx)(`div`,{className:`ui-lab__status`,children:(0,J.jsx)(v,{value:n,icon:(0,J.jsx)(i,{name:`coin`}),label:`demo coins`,variant:`coins`,className:`justify-self-start`})})]}),(0,J.jsx)(Fr,{}),e===`idle`?null:(0,J.jsx)(`div`,{className:L(`screen-wipe`,e===`covering`?`screen-wipe--in`:`screen-wipe--out`),"aria-hidden":`true`})]})}function _i(){let[e,t]=(0,q.useState)(!1);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{id:`pricing`,children:[(0,J.jsxs)(`div`,{className:`ui-lab__controls`,children:[(0,J.jsx)(Be,{price:120}),(0,J.jsx)(Be,{price:90,originalPrice:180}),(0,J.jsx)(S,{variant:`neutral`,onClick:()=>t(!0),children:`Try to buy the pond`})]}),(0,J.jsx)(`div`,{className:`mt-4`,children:(0,J.jsxs)(Ge,{children:[(0,J.jsx)(te,{amount:500,price:`$1.99`}),(0,J.jsx)(te,{amount:1600,price:`$4.99`,bonus:15,featured:!0}),(0,J.jsx)(te,{amount:4e3,price:`$9.99`,bonus:30})]})})]}),(0,J.jsx)(je,{open:e,onOpenChange:t,needed:450,balance:120,onOpenShop:()=>t(!1)})]})}export{Yr as UiLabScreen};