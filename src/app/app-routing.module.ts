import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './categoria/adm/adm.component';
import { ArtefotoComponent } from './categoria/artefoto/artefoto.component';
import { AutoajudaComponent } from './categoria/autoajuda/autoajuda.component';
import { BiografiasComponent } from './categoria/biografias/biografias.component';
import { HistoriaComponent } from './categoria/historia/historia.component';
import { LitbraComponent } from './categoria/litbra/litbra.component';
import { LitinterComponent } from './categoria/litinter/litinter.component';
import { PsicologiaComponent } from './categoria/psicologia/psicologia.component';
import { ReligiaoComponent } from './categoria/religiao/religiao.component';
import { SuspenseComponent } from './categoria/suspense/suspense.component';
import { TerrorComponent } from './categoria/terror/terror.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "adm", component: AdmComponent},
  {path: "autoajuda", component: AutoajudaComponent},
  {path: "biografias", component: BiografiasComponent},
  {path: "artefoto", component: ArtefotoComponent},
  {path: "litinter", component: LitinterComponent},
  {path: "litbra", component: LitbraComponent},
  {path: "historia", component: HistoriaComponent},
  {path: "psicologia", component: PsicologiaComponent},
  {path: "religiao", component: ReligiaoComponent},
  {path: "suspense", component: SuspenseComponent},
  {path: "terror", component: TerrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
