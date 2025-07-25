
interface User{
    readonly id: number;
    username: string;
    email: string;
    isActive?: boolean;
    role: 'admin' | 'user' | 'guest';
}

type UserProfile = User &{
    birthDate: Date;
    address?: string; 
}

class UserAccount implements User{
    readonly id: number;
    username: string;
    email: string;
    isActive?: boolean;
    role: 'admin' | 'user' | 'guest';
    private password: string;

    constructor(user: User, password: string){
         this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.isActive = user.isActive ?? true;
        this.role = user.role;
        this.password = password;
    }

    validatePassword(): boolean{
        return this.password.length >= 8;
    }
}

class AdminUser extends UserAccount {
  permissions: string[];

  constructor(user: User, password: string, permissions: string[]) {
    super(user, password);
    this.permissions = permissions;
  }

  override validatePassword(): boolean {
    return super.validatePassword() && this.passwordLength() >= 12;
  }

  private passwordLength() {
    return (this as any).password?.length ?? 0;
  }
}

function createUser(userData: Partial<User>): User {
    return{
        id: Date.now(),
        username: userData.username ?? 'NoName',
        email: userData.email ?? '',
        isActive: userData.isActive ?? true,
        role: userData.role ?? 'user',
    };
}

function formatUserInfo(user: User | UserProfile): string {
    if('birthDate' in user){
        return `User ${user.username} born on ${user.birthDate.toDateString()}`;
    } else {
    return `User ${user.username} (${user.role})`;
    }
}

const form = document.getElementById("userForm") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const username = (form.elements.namedItem("username") as HTMLInputElement).value;
  const email = emailInput.value;
  const password = (form.elements.namedItem("password") as HTMLInputElement).value;
  const role = (form.elements.namedItem("role") as HTMLSelectElement).value as User["role"];

  const partialUser: Partial<User> = { username, email, role };
  const fullUser = createUser(partialUser);

  let userInstance: UserAccount | AdminUser;

  if (role === 'admin') {
    userInstance = new AdminUser(fullUser, password, ["read", "write"]);
  } else {
    userInstance = new UserAccount(fullUser, password);
  }

  if (!userInstance.validatePassword()) {
    alert("Mật khẩu không hợp lệ!");
    return;
  }

  console.log("Tạo user thành công:", fullUser);
  console.log("Thông tin định dạng:", formatUserInfo(fullUser));
};
