import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  loading: boolean = true;

  noticias: object = [
    {
      titulo: 'Formulación del Plan Anticorrupción y Atención al Ciudadano 2021',
      fecha: '2020-12-31',
      cuerpo: 'El IGAC tiene el gusto de invitar a los ciudadanos, gremios, veedurías ciudadanas, academia, organizaciones no gubernamentales y órganos de control a participar hasta enero 11 de 2021 en la formulación del Plan Anticorrupción y de Atención al Ciudadano (el cual incluye la estrategia de racionalización de trámites), y de la Matriz de Riesgos Institucional correspondientes a la vigencia 2021.   Sus valiosos aportes serán recibidos en el correo electrónico: planeacion@igac.gov.co',
      imagen: '../../../../assets/news/1.png',
      url: 'https://www.igac.gov.co/es/noticias/formulacion-del-plan-anticorrupcion-y-atencion-al-ciudadano-2021'
    },
    {
      titulo: 'El IGAC suspenderá la atención de trámites catastrales por 19 días',
      fecha: '2020-12-21',
      cuerpo: 'Desde el próximo 24 de diciembre y hasta el 11 de enero de 2021, el Instituto suspenderá la operación de los sistemas de información catastral con el objetivo de consolidar la información de los procesos de formación y actualización realizados durante el año.   ',
      imagen: '../../../../assets/news/2.png',
      url: 'https://www.igac.gov.co/es/noticias/el-igac-suspendera-la-atencion-de-tramites-catastrales-por-19-dias'
    },
    {
      titulo: 'Participe en la rendición de cuentas del IGAC',
      fecha: '2020-12-18',
      cuerpo: 'El Instituto Geográfico Agustín Codazzi (IGAC) pone a disposición de la ciudadanía y los grupos de interés el informe que consolida los logros y avances en la gestión de la entidad durante el 2020 y describe la administración de los recursos humanos y económicos relacionados con su quehacer. ',
      imagen: '../../../../assets/news/3.png',
      url: 'https://www.igac.gov.co/es/noticias/participe-en-la-rendicion-de-cuentas-del-igac'
    },{
      titulo: 'Atención Tolima y Meta: personas se están haciendo pasar por funcionarios del IGAC para estafar a la ciudadanía',
      fecha: '2020-12-11',
      cuerpo: 'El Instituto Geográfico Agustín Codazzi (IGAC) recuerda a la ciudadanía del Tolima y Meta que los trámites de la entidad no necesitan ningún tipo de intermediario y, por tanto, deben abstenerse de realizar cualquier pago a personas que estén realizando cobros irregulares por estas gestiones.',
      imagen: '../../../../assets/news/4.png',
      url: 'https://www.igac.gov.co/es/noticias/atencion-tolima-y-meta-personas-se-estan-haciendo-pasar-por-funcionarios-del-igac-para'
    },{
      titulo: 'Villavicencio, listo para actualizar su catastro con enfoque multipropósito',
      fecha: '2020-12-09',
      cuerpo: 'Con una inversión de $4.999 millones, el IGAC actualizará la información catastral de 80.555 predios de las zonas urbanas y rurales de la capital del Meta.  ',
      imagen: '../../../../assets/news/5.png',
      url: 'https://www.igac.gov.co/es/noticias/villavicencio-listo-para-actualizar-su-catastro-con-enfoque-multiproposito'
    },
  ]

  constructor(private theInAppBrowser: InAppBrowser) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  openBrowser(url: string) {
    let target = "_system";
    this.theInAppBrowser.create(url,target);    
  }

}

