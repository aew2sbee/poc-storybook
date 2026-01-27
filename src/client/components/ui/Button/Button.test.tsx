import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("ラベル（children）が表示される", () => {
    render(<Button>保存</Button>);
    expect(screen.getByRole("button", { name: "保存" })).toBeInTheDocument();
  });

  it("クリックすると onClick が呼ばれる", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>保存</Button>);
    await user.click(screen.getByRole("button", { name: "保存" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("disabled のときクリックできない", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        保存
      </Button>
    );

    const btn = screen.getByRole("button", { name: "保存" });
    expect(btn).toBeDisabled();

    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("variant に応じて class が付く（例: primary / secondary）", () => {
    const { rerender } = render(<Button variant="primary">保存</Button>);
    expect(screen.getByRole("button", { name: "保存" })).toHaveClass("btn-primary");

    rerender(<Button variant="secondary">保存</Button>);
    expect(screen.getByRole("button", { name: "保存" })).toHaveClass("btn-secondary");
  });

  it("className が追加で付与される", () => {
    render(<Button className="extra">保存</Button>);
    expect(screen.getByRole("button", { name: "保存" })).toHaveClass("extra");
  });
});
