"use server"; 

import { redirect } from 'next/navigation';
import { Repo } from '../../Repo'

export async function updateUser(formData: FormData) {
    const id = formData.get('id')?.toString();
    const name = formData.get('name')?.toString();
    const info = formData.get('info')?.toString();
 
    if (!id || !name || !info) {
        throw new Error('Invalid form submission: missing required fields');
    }
 
    const response = await fetch(`${new Repo().getCloudFrontApiUrl()}/user/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({ name, info }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user');
    }
 
    redirect(`/users`);
}

export async function deleteUser(formData: FormData) {
    const id = formData.get('id')?.toString(); 
  
    const response = await fetch(`${new Repo().getCloudFrontApiUrl()}/user/${id}`, { method: 'DELETE' });

    if (!response.ok) {
        throw new Error('Failed to update user');
    }
 
    redirect(`/users`);
}
