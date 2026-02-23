const API_BASE = '/api/beat';

export interface ContactPayload {
  firstname?: string;
  lastname?: string;
  email: string;
  message?: string;
  name?: string;
  mobile?: string;
  course?: string;
}

export interface ApplyPayload {
  name: string;
  email: string;
  resume?: File;
  opportunityId: number;
}

export async function sendContact(payload: ContactPayload): Promise<string> {
  const res = await fetch(`${API_BASE}/contact1`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.text();
}

export async function applyForJob(payload: ApplyPayload): Promise<string> {
  const form = new FormData();
  form.append('name', payload.name);
  form.append('email', payload.email);
  form.append('opportunityId', String(payload.opportunityId));
  if (payload.resume) form.append('resume', payload.resume);

  const res = await fetch(`${API_BASE}/apply`, {
    method: 'POST',
    body: form,
  });
  if (!res.ok) throw new Error('Failed to submit application');
  return res.text();
}
