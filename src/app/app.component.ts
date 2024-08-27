import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserComponent } from './user/user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            AdminComponent, 
            AuthComponentComponent, 
            BudgetComponent, 
            BudgetFormComponent, 
            BudgetListComponent, 
            CategoryComponent,
            CategoryFormComponent, 
            CategoryListComponent,
            LoginComponent, 
            RegisterComponent, 
            RoleManagementComponent, 
            TransactionComponent, 
            TransactionFormComponent, 
            TransactionListComponent, 
            UserComponent, 
            UserManagementComponent, 
            UserProfileComponent, 
            UserProfileComponent, 
            UserSettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-financing-app';
}
