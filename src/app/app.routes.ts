import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista/lista.component';
import { TemplatePersonaComponent } from './template-persona/template-persona.component';
import { TemplateTelefonoComponent } from './template-telefono/template-telefono.component';
import { TemplateContactoComponent } from './template-contacto/template-contacto.component';

export const routes: Routes = [
    {path: 'contacto', component: TemplateContactoComponent},
    {path: 'telefono', component: TemplateTelefonoComponent},
    {path: 'persona', component: TemplatePersonaComponent},
    { path: 'menu', component: MenuComponent },
    { path: 'lista', component: ListaComponent },
    { path: '', redirectTo: 'menu', pathMatch: 'full' }
];
