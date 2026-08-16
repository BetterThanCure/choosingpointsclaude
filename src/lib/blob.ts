import "server-only";
import { put, del } from "@vercel/blob";

/**
 * Uploads a file to Vercel Blob under a namespaced path (e.g.
 * `avatars/<userId>/<filename>`) and returns its public URL. Requires
 * BLOB_READ_WRITE_TOKEN — set automatically when a Blob store is
 * connected to the Vercel project, or manually for local development.
 */
export async function uploadFile(pathname: string, file: File | Blob) {
  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: true,
  });
  return blob.url;
}

export async function deleteFile(url: string) {
  await del(url);
}
