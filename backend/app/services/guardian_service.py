# Guardian evolves through 5 stages based on total fragment count
STAGE_THRESHOLDS = [0, 20, 50, 100, 200]


def calculate_guardian_stage(total_fragments: int) -> int:
    stage = 0
    for i, threshold in enumerate(STAGE_THRESHOLDS):
        if total_fragments >= threshold:
            stage = i
    return stage


def get_next_stage_threshold(current_stage: int) -> int | None:
    next_stage = current_stage + 1
    if next_stage >= len(STAGE_THRESHOLDS):
        return None
    return STAGE_THRESHOLDS[next_stage]
