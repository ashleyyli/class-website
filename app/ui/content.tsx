'use client';

import { Activity, Opportunity } from '../lib/definitions'
import { getDate } from "../lib/utils";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./buttons";
import { handleVote, handleSignUp } from "../lib/actions";

export function ActivityContent({
    activity,
} : {
    activity: Activity;
}) {

  const date_obj = activity.date ? new Date(activity.date) : null;
  const date_string = date_obj ? getDate({ date: date_obj }) : "";

  return (
    <div>
        <p className="text-gray-500">{date_string ?? ''}</p>
        <p className="text-gray-500">{activity.votes} votes</p>
        <p>{activity.description}</p>
        <div className="flex flex-row justify-end gap-2 pt-4">
          <SecondaryButton>
            <Link href="/activities">
                Cancel
            </Link>
          </SecondaryButton>
          
          <PrimaryButton onClick={() => handleVote(activity.id, activity.votes)}>
            Vote
          </PrimaryButton>
          
        </div>
    </div>
  );
}

export function OpportunityContent({
    opportunity,
} : {
    opportunity: Opportunity;
}) {

  const start_date_obj = opportunity.start_date ? new Date(opportunity.start_date) : null;
  const start_date_string = start_date_obj ? getDate({ date: start_date_obj }) : "";
  
  const end_date_obj = opportunity.end_date ? new Date(opportunity.end_date) : null;
  const end_date_string = end_date_obj ? getDate({ date: end_date_obj }) : "";

  return (
    <div>
        <p className="text-gray-500">{start_date_string === start_date_string ? start_date_string : start_date_string + " - " + end_date_string}</p>
        <p>{opportunity.description}</p>
        <div className="flex flex-row justify-end gap-2 pt-4">
          <SecondaryButton>
            <Link href="/opportunities">
                Cancel
            </Link>
          </SecondaryButton>
          
          <PrimaryButton onClick={() => handleSignUp(opportunity.id)}>
            Sign up
          </PrimaryButton>
          
        </div>
    </div>
  );
}