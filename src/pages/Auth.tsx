
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Состояния для форм
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: false
  });
  
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  // Обработчики изменения полей
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({ ...prev, [name]: value }));
  };

  // Обработчики чекбоксов
  const handleRememberChange = (checked: boolean) => {
    setLoginForm(prev => ({ ...prev, remember: checked }));
  };
  
  const handleAgreeTermsChange = (checked: boolean) => {
    setRegisterForm(prev => ({ ...prev, agreeTerms: checked }));
  };

  // Обработчики отправки форм
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Здесь будет логика аутентификации
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Успешный вход",
        description: "Вы успешно вошли в систему",
      });
      navigate("/");
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive"
      });
      return;
    }
    
    if (!registerForm.agreeTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями использования",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Здесь будет логика регистрации
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Успешная регистрация",
        description: "Аккаунт успешно создан",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-900 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
          <Icon name="Hammer" className="mr-2 h-8 w-8" />
          ВсеМастера
        </h1>
        <p className="text-red-100">Найдите лучших мастеров для вашего ремонта</p>
      </div>
      
      <Card className="w-full max-w-md border-red-200 shadow-2xl">
        <Tabs defaultValue="login" className="w-full">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>
          </CardHeader>
          
          <CardContent>
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="ваш@email.ru" 
                      required 
                      value={loginForm.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Пароль</Label>
                      <Link to="/forgot-password" className="text-sm text-red-600 hover:text-red-800">
                        Забыли пароль?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      value={loginForm.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember" 
                      checked={loginForm.remember} 
                      onCheckedChange={handleRememberChange} 
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Запомнить меня
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Вход...
                      </>
                    ) : (
                      "Войти"
                    )}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-name">Имя</Label>
                    <Input 
                      id="reg-name" 
                      name="name" 
                      placeholder="Иван Иванов" 
                      required 
                      value={registerForm.name}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input 
                      id="reg-email" 
                      name="email" 
                      type="email" 
                      placeholder="ваш@email.ru" 
                      required 
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input 
                      id="reg-password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-confirm-password">Подтвердите пароль</Label>
                    <Input 
                      id="reg-confirm-password" 
                      name="confirmPassword" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      value={registerForm.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={registerForm.agreeTerms} 
                      onCheckedChange={handleAgreeTermsChange} 
                    />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      Я согласен с{" "}
                      <Link to="/terms" className="text-red-600 hover:text-red-800">
                        условиями использования
                      </Link>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Регистрация...
                      </>
                    ) : (
                      "Зарегистрироваться"
                    )}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </CardContent>
          
          <CardFooter className="border-t pt-6">
            <div className="w-full space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    или войдите через
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="border-red-200">
                  <Icon name="Mail" className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" type="button" className="border-red-200">
                  <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                  Telegram
                </Button>
              </div>
            </div>
          </CardFooter>
        </Tabs>
      </Card>
      
      <p className="mt-8 text-white text-sm">
        © 2025 ВсеМастера. Все права защищены.
      </p>
    </div>
  );
};

export default Auth;
