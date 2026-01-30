import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Button } from '.';

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Canvas 上でコンポーネントを中央寄せで表示するための任意パラメータ
    // 詳細: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // このコンポーネントには自動生成された Autodocs ページが作成されます
  // 詳細: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // argTypes の詳細設定（Storybook Controls 用）
  // 詳細: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // fn を使って onClick をスパイすることで、
  // クリック時に Actions パネルへイベントが表示されるようになります
  // 詳細: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const LABEL = "ログイン";

export const ColorPrimary: Story = {
  args: {
    color: "primary",
    children: LABEL,
  },
};

export const ColorSecondary: Story = {
  args: {
    color: "secondary",
    children: LABEL,
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    children: LABEL,
  },
};

export const SizeMedium: Story = {
  args: {
    children: LABEL,
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
    children: LABEL,
  },
};
