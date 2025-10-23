import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(
      'https://wlbgdhgllelzohpzmjyn.supabase.co',  
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsYmdkaGdsbGVsem9ocHptanluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTk5MzQsImV4cCI6MjA2NzEzNTkzNH0.mQx6qNPUWJGILB_FW8Tizb2i_w90A0dCABpPBGvtiEI'                     // 🔁 Reemplaza con tu anon key
    );
  }

  async obtenerImagenes(): Promise<any[]> {
  const { data, error } = await this.supabase
    .from('FotosGaleria')
    .select('*');

  if (error) {
    console.error('Error al obtener imágenes:', error);
    return [];
  }

  return data ?? [];
}

}

