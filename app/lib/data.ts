import supabase from "./supabaseClient";

export async function FetchActivitybyId(id: number) {
  const { data, error } = await supabase
    .from('activities')
    .select('id, title, status, description, date, votes, created_at, author')
    .eq('id', id)
    .single();  

  if (error) {
    console.error("Error fetching activity by ID:", error);
  }

  console.log("activity fetched");

  return data;
}

export async function fetchActivities() {
  const { data, error } = await supabase
    .from('activities')
    .select('id, title, status, description, date, votes, created_at, author')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  console.log("activities fetched");

  return data;
}

export async function getVotes(id : number) {
  const { count, error } = await supabase
    .from('activity_votes')
    .select('*', { count: 'exact', head: true })
    .eq('activity_id', id);

  if (error) {
    console.log(error);
    return;
  }

  return count ?? 0;
}

export async function FetchOpportunitybyId(id: number) {
  const { data, error } = await supabase
    .from('opportunities')
    .select('id, title, status, start_date, end_date, description, min_hours, max_hours, created_at, author')
    .eq('id', id)
    .single();  

  if (error) {
    console.error("Error fetching opportunity by ID:", error);
  }

  console.log("opportunity fetched");

  return data;
}

export async function fetchOpportunities() {
  const { data, error } = await supabase
    .from('opportunities')
    .select('id, title, status, start_date, end_date, description, min_hours, max_hours, created_at, author')
    .order('start_date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  console.log("opportunities fetched");

  return data;
}

export async function getSignups(id : number) {
  const { count, error } = await supabase
    .from('opportunity_signups')
    .select('*', { count: 'exact', head: true })
    .eq('opportunity_id', id);

  if (error) {
    console.log(error);
    return;
  }

  return count ?? 0;
}

export async function fetchSchedules() {
  const { data, error } = await supabase
    .from('schedule')
    .select('id, title, published, date, location, description')
    .order('date', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  console.log("schedules fetched");

  return data;
}