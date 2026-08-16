export default function AdminMembersPage() {
  return (
    <div>
      <p className="font-serif text-sm uppercase tracking-[0.2em] text-paper/50">
        Members
      </p>
      <h1 className="mt-2 font-serif text-3xl">Member directory</h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-paper/60">
        A searchable, permissioned member list connects here once member
        accounts exist, with row-level security enforced at the database
        layer regardless of admin UI state.
      </p>
    </div>
  );
}
