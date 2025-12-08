import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);

      // TODO: 실제 로그인 API 호출로 대체
      setTimeout(() => {
        // 임시 로그인 처리
        const user = {
          email: value.email,
          name: "사용자",
          id: "1",
        };
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
        onOpenChange(false);
        // 페이지 새로고침하여 로그인 상태 반영
        window.location.reload();
      }, 1000);
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogClose onClose={() => onOpenChange(false)} />
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>
            WaitFair에 로그인하여 티켓을 예매하세요
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4 mt-4"
        >
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) {
                  return "이메일을 입력해주세요.";
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  return "올바른 이메일 형식을 입력해주세요.";
                }
                return undefined;
              },
            }}
          >
            {(field) => (
              <Input
                type="email"
                label="이메일"
                placeholder="example@email.com"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.join(", ")}
                disabled={isLoading}
              />
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) {
                  return "비밀번호를 입력해주세요.";
                }
                if (value.length < 6) {
                  return "비밀번호는 최소 6자 이상이어야 합니다.";
                }
                return undefined;
              },
            }}
          >
            {(field) => (
              <Input
                type="password"
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors.join(", ")}
                disabled={isLoading}
              />
            )}
          </form.Field>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              취소
            </Button>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={!canSubmit || isSubmitting || isLoading}
                >
                  {isLoading || isSubmitting ? "로그인 중..." : "로그인"}
                </Button>
              )}
            </form.Subscribe>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          계정이 없으신가요?{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
            onClick={() => {
              // TODO: 회원가입 모달로 전환
              alert("회원가입 기능은 준비 중입니다.");
            }}
          >
            회원가입
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
