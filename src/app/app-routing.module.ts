import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HalamanDuaComponent } from "./halaman-dua/halaman-dua.component";
import { HalamanSatuComponent } from "./halaman-satu/halaman-satu.component";

const routes: Routes = [
    {
        path: 'halaman-satu', component: HalamanSatuComponent
    },
    {
        path: 'halaman-dua', component: HalamanDuaComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }