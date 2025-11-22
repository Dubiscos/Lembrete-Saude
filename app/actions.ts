'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

interface LembreteData {
  tipo: string;
  dataHora: string;
  descritivo: string;
  recorrencia: string;
}

export async function criarLembreteAction(data: LembreteData) {
  try {
    await prisma.lembrete.create({
      data: {
        tipo: data.tipo,
        dataHora: new Date(data.dataHora),
        descritivo: data.descritivo,
        recorrencia: data.recorrencia,
      },
    });

    revalidatePath('/'); 

    return { success: true };
    
  } catch (error) {
    console.error("Erro ao criar lembrete:", error);
    return { success: false, error: "Erro ao salvar no banco de dados" };
  }
}

export async function listarLembretesAction() {
  try {
    const lembretes = await prisma.lembrete.findMany({
      orderBy: {
        dataHora: 'asc', 
      },
    });
    return { success: true, data: lembretes };
  } catch (error) {
    console.error("Erro ao listar:", error);
    return { success: false, data: [] };
  }
}

export async function deletarLembreteAction(id: string) {
  try {
    await prisma.lembrete.delete({
      where: { id },
    });
    revalidatePath('/'); 
    return { success: true };
  } catch (error) {
    console.error("Erro ao deletar:", error);
    return { success: false };
  }
}

export async function atualizarLembreteAction(id: string, formData: FormData) {
  try {
    await prisma.lembrete.update({
      where: { id },
      data: {
        dataHora: new Date(formData.get('dataHora') as string),
        descritivo: formData.get('descritivo') as string,
      },
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return { success: false };
  }
}