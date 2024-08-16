import { User } from "discord-types/general"

export interface LogEntry {
  id: string
  actionType: string
  action: number | Action
  targetType: string
  targetId: string
  target?: User
  userId: string
  changes: Change[]
  timestampStart: string
  timestampEnd: string
  user?: User
  options: Options
}
interface Action {
    value: number,
    label: string
}
export interface Change {
  key: string
  newValue: NewValue[]
}

export interface NewValue {
  name: string
  id: string
}

export interface Options {}

const Actions = {
    "1": "Update Server",
    "10": "Create Channel",
    "11": "Update Channel",
    "12": "Delete Channel",
    "13": "Create Channel Permissions",
    "14": "Update Channel Permissions",
    "15": "Delete Channel Permissions",
    "20": "Kick Member",
    "21": "Prune Members",
    "22": "Ban Member",
    "23": "Unban Member",
    "24": "Update Member",
    "25": "Update Member Roles",
    "26": "Move Member",
    "27": "Disconnect Member",
    "28": "Add Bot",
    "30": "Create Role",
    "31": "Update Role",
    "32": "Delete Role",
    "40": "Create Invite",
    "41": "Update Invite",
    "42": "Delete Invite",
    "50": "Create Webhook",
    "51": "Update Webhook",
    "52": "Delete Webhook",
    "60": "Create Emoji",
    "61": "Update Emoji",
    "62": "Delete Emoji",
    "72": "Delete Messages",
    "73": "Bulk Delete Messages",
    "74": "Pin Message",
    "75": "Unpin Message",
    "80": "Create Integration",
    "81": "Update Integration",
    "82": "Delete Integration",
    "83": "Start Stage",
    "84": "Update Stage",
    "85": "End Stage",
    "90": "Create Sticker",
    "91": "Update Sticker",
    "92": "Delete Sticker",
    "100": "Create Event",
    "101": "Update Event",
    "102": "Cancel Event",
    "110": "Create Thread",
    "111": "Update Thread",
    "112": "Delete Thread",
    "121": "Update Command Permissions",
    "130": "Create Soundboard Sound",
    "131": "Update Soundboard Sound",
    "132": "Delete Soundboard Sound",
    "140": "Create AutoMod Rule",
    "141": "Update AutoMod Rule",
    "142": "Cancel AutoMod Rule",
    "143": "AutoMod Block Message",
    "163": "Create Customization Question",
    "164": "Update Customization Question",
    "165": "Delete Customization Question",
    "166": "Create Onboarding",
    "167": "Update Onboarding",
    "171": "Feature Item on Home",
    "172": "Remove Item from Home",
    "190": "Create Server Guide",
    "191": "Update Server Guide",
    "192": "Create Voice Channel Status",
    "193": "Delete Voice Channel Status"
}
// const actions = findByCode(".GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE")()
// .reduce((acc, cur) => {
//     acc[cur.value] = cur.label;
//     return acc;
// }, {});
