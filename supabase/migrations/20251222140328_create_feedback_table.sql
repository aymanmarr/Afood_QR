/*
  # Create Feedback Table

  1. New Tables
    - `feedback`
      - `id` (uuid, primary key)
      - `rating` (integer, 1-5 stars)
      - `message` (text, feedback message)
      - `created_at` (timestamptz, submission timestamp)
  
  2. Security
    - Enable RLS on `feedback` table
    - Add policy for anonymous users to insert feedback (public submission)
    - Add policy for authenticated users to view all feedback (admin access)
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (true);