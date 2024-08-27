import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch:'full'},
    { path: 'auth', component: AuthComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'categories', component: CategoryComponent },
];

export const appRoutes = provideRouter(routes);